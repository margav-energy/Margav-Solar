// ===== MARGAV ENERGY WEBSITE JAVASCRIPT =====
// Interactive functionality for the MarGav Solar website

document.addEventListener("DOMContentLoaded", function () {
  // ===== MOBILE NAVIGATION TOGGLE =====
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Toggle hamburger icon
      const icon = navToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  // ===== STICKY HEADER ON SCROLL =====
  const header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====
  const sections = document.querySelectorAll("section[id]");

  function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const correspondingLink = document.querySelector(
        `.nav__link[href="#${sectionId}"]`
      );

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Remove active class from all links
        document.querySelectorAll(".nav__link").forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to current section's link
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);

  // ===== CHARITY SECTION CONFIGURATION =====
  const CHARITY_CONFIG = {
    CHARITY_NAME: "Our Partner Charity",
    CHARITY_LOGO_URL: "", // Set to charity logo URL when available
    IMPACT_PAGE_URL: "#impact"
  };

  // Initialize charity section
  function initializeCharitySection() {
    const charityLogo = document.getElementById("charity-logo");
    const charityDescription = document.querySelector(".charity__description");
    
    // Update charity name in description
    if (charityDescription) {
      charityDescription.textContent = `For every solar panel installed, we donate to ${CHARITY_CONFIG.CHARITY_NAME}, helping make a positive impact beyond energy savings.`;
    }
    
    // Show charity logo if URL is provided
    if (CHARITY_CONFIG.CHARITY_LOGO_URL && charityLogo) {
      charityLogo.src = CHARITY_CONFIG.CHARITY_LOGO_URL;
      charityLogo.alt = CHARITY_CONFIG.CHARITY_NAME;
      charityLogo.style.display = "block";
    }
    
    // Update impact page link
    const impactLink = document.querySelector(".charity__cta");
    if (impactLink) {
      impactLink.href = CHARITY_CONFIG.IMPACT_PAGE_URL;
    }
  }

  // Initialize charity section on page load
  initializeCharitySection();

  // ===== QUOTATION CALCULATOR FUNCTIONALITY =====
  const calculatorForm = document.getElementById("calculator-form");
  const calculatorResult = document.getElementById("calculator-result");
  const costRange = document.getElementById("cost-range");
  const dynamicOptions = document.getElementById("dynamic-options");
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');

  // Service-specific field definitions
  const serviceFields = {
    "solar-panels": [
      {
        label: "Number of Bedrooms",
        id: "solar-bedrooms",
        type: "select",
        options: [
          { value: "", text: "Select number of bedrooms" },
          { value: "1", text: "1 bedroom" },
          { value: "2", text: "2 bedrooms" },
          { value: "3", text: "3 bedrooms" },
          { value: "4", text: "4 bedrooms" },
          { value: "5+", text: "5+ bedrooms" }
        ]
      },
      {
        label: "Roof Type",
        id: "solar-roof-type",
        type: "select",
        options: [
          { value: "", text: "Select roof type" },
          { value: "pitched", text: "Pitched" },
          { value: "flat", text: "Flat" },
          { value: "mixed", text: "Mixed (Pitched & Flat)" },
          { value: "other", text: "Other" }
        ]
      },
      {
        label: "Roof Orientation",
        id: "solar-roof-orientation",
        type: "select",
        options: [
          { value: "", text: "Select roof orientation" },
          { value: "south", text: "South facing" },
          { value: "south-east", text: "South-east facing" },
          { value: "south-west", text: "South-west facing" },
          { value: "east", text: "East facing" },
          { value: "west", text: "West facing" },
          { value: "north", text: "North facing" }
        ]
      },
      {
        label: "Panel Type Preference",
        id: "solar-panel-type",
        type: "select",
        options: [
          { value: "", text: "Select panel type preference" },
          { value: "mono", text: "Monocrystalline (High efficiency)" },
          { value: "poly", text: "Polycrystalline (Budget option)" },
          { value: "thin-film", text: "Thin-film (Flexible)" }
        ]
      }
    ],
    "battery-storage": [
      {
        label: "Storage Capacity Needed",
        id: "battery-capacity",
        type: "select",
        options: [
          { value: "", text: "Select storage capacity needed" },
          { value: "small", text: "5-10 kWh (Small household)" },
          { value: "medium", text: "10-15 kWh (Medium household)" },
          { value: "large", text: "15-20 kWh (Large household)" },
          { value: "xlarge", text: "20+ kWh (Extra large/commercial)" }
        ]
      },
      {
        label: "Battery Type",
        id: "battery-type",
        type: "select",
        options: [
          { value: "", text: "Select battery type" },
          { value: "lithium-ion", text: "Lithium-ion (Most popular)" },
          { value: "lead-acid", text: "Lead-acid (Budget option)" },
          { value: "saltwater", text: "Saltwater (Eco-friendly)" }
        ]
      },
      {
        label: "Installation Type",
        id: "battery-installation-type",
        type: "select",
        options: [
          { value: "", text: "Select installation type" },
          { value: "standalone", text: "Standalone battery system" },
          { value: "solar-plus", text: "Solar + Battery combination" },
          { value: "grid-tied", text: "Grid-tied system" }
        ]
      }
    ],
    // "boilers": [
    //   {
    //     label: "Number of Bathrooms",
    //     id: "boiler-bathrooms",
    //     type: "select",
    //     options: [
    //       { value: "", text: "Select number of bathrooms" },
    //       { value: "1", text: "1 bathroom" },
    //       { value: "2", text: "2 bathrooms" },
    //       { value: "3", text: "3 bathrooms" },
    //       { value: "4+", text: "4+ bathrooms" }
    //     ]
    //   },
    //   {
    //     label: "Current Heating System",
    //     id: "boiler-current-heating",
    //     type: "select",
    //     options: [
    //       { value: "", text: "Select current heating system" },
    //       { value: "gas", text: "Gas boiler" },
    //       { value: "electric", text: "Electric heating" },
    //       { value: "oil", text: "Oil boiler" },
    //       { value: "heat-pump", text: "Heat pump" },
    //       { value: "other", text: "Other" }
    //     ]
    //   },
    //   {
    //     label: "System Type Preference",
    //     id: "boiler-system-type",
    //     type: "select",
    //     options: [
    //       { value: "", text: "Select system type preference" },
    //       { value: "combi", text: "Combi boiler" },
    //       { value: "system", text: "System boiler" },
    //       { value: "regular", text: "Regular boiler" }
    //     ]
    //   }
    // ],
    "ev-chargers": [
      {
        label: "Off-street Parking",
        id: "ev-off-street-parking",
        type: "select",
        options: [
          { value: "", text: "Do you have off-street parking?" },
          { value: "yes", text: "Yes" },
          { value: "no", text: "No" }
        ]
      },
      {
        label: "Charger Type Preference",
        id: "ev-charger-type",
        type: "select",
        options: [
          { value: "", text: "Select charger type preference" },
          { value: "fast", text: "Fast (7kW) - Most popular" }
        ]
      },
      {
        label: "Installation Location",
        id: "ev-installation-location",
        type: "select",
        options: [
          { value: "", text: "Select installation location" },
          { value: "garage", text: "Inside garage" },
          { value: "driveway", text: "On driveway" },
          { value: "wall-mounted", text: "Wall-mounted exterior" }
        ]
      }
    ]
  };

  // Service group titles for better organization
  const serviceGroupTitles = {
    "solar-panels": "Solar Panel Configuration",
    "battery-storage": "Battery Storage Configuration", 
    "boilers": "Boiler Configuration",
    "ev-chargers": "EV Charger Configuration"
  };

  // Handle service checkbox changes
  if (serviceCheckboxes.length > 0 && dynamicOptions) {
    serviceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener("change", function() {
        const selectedServices = Array.from(serviceCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value);
        
        updateDynamicOptions(selectedServices);
      });
    });
  }

  // Function to create form field elements
  function createFormField(field) {
    const formGroup = document.createElement("div");
    formGroup.className = "form__group";

    const label = document.createElement("label");
    label.htmlFor = field.id;
    label.className = "form__label";
    label.textContent = field.label;

    if (field.type === "select") {
      const select = document.createElement("select");
      select.id = field.id;
      select.className = "form__select";
      select.required = true;

      field.options.forEach(opt => {
        const optionElement = document.createElement("option");
        optionElement.value = opt.value;
        optionElement.textContent = opt.text;
        select.appendChild(optionElement);
      });

      formGroup.appendChild(label);
      formGroup.appendChild(select);
    } else if (field.type === "input") {
      const input = document.createElement("input");
      input.type = field.inputType || "text";
      input.id = field.id;
      input.className = "form__input";
      input.placeholder = field.placeholder || "";
      input.required = field.required || false;

      formGroup.appendChild(label);
      formGroup.appendChild(input);
    } else if (field.type === "checkbox-group") {
      // For bathroom ensuite checkboxes
      formGroup.appendChild(label);
      
      field.checkboxes.forEach(checkbox => {
        const checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox-container";
        checkboxContainer.style.marginTop = "0.5rem";

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.id = checkbox.id;
        checkboxInput.name = checkbox.name;
        checkboxInput.value = checkbox.value;

        const checkboxLabel = document.createElement("label");
        checkboxLabel.htmlFor = checkbox.id;
        checkboxLabel.className = "checkbox-label";
        checkboxLabel.textContent = checkbox.label;
        checkboxLabel.style.marginLeft = "0.5rem";
        checkboxLabel.style.fontWeight = "normal";

        checkboxContainer.appendChild(checkboxInput);
        checkboxContainer.appendChild(checkboxLabel);
        formGroup.appendChild(checkboxContainer);
      });
    }

    return formGroup;
  }

  // Function to create service group header
  function createServiceGroupHeader(serviceType) {
    const header = document.createElement("div");
    header.className = "service-group-header";
    header.style.marginTop = "2rem";
    header.style.marginBottom = "1rem";
    header.style.paddingBottom = "0.5rem";
    header.style.borderBottom = "2px solid var(--primary-color, #28A745)";

    const title = document.createElement("h4");
    title.textContent = serviceGroupTitles[serviceType] || serviceType;
    title.style.margin = "0";
    title.style.color = "var(--primary-color, #28A745)";
    title.style.fontSize = "1.1rem";
    title.style.fontWeight = "600";

    header.appendChild(title);
    return header;
  }

  // Function to update dynamic options based on multiple service selection
  function updateDynamicOptions(selectedServices) {
    if (!dynamicOptions) return;

    // Clear existing options
    dynamicOptions.innerHTML = "";

    if (selectedServices && selectedServices.length > 0) {
      selectedServices.forEach(serviceType => {
        if (serviceFields[serviceType]) {
          // Add service group header
          const header = createServiceGroupHeader(serviceType);
          dynamicOptions.appendChild(header);

          // Add fields for this service
          const fields = serviceFields[serviceType];
          fields.forEach(field => {
            const formGroup = createFormField(field);
            dynamicOptions.appendChild(formGroup);
          });

          // Special handling for boiler bathrooms - add ensuite checkboxes
          // if (serviceType === "boilers") {
          //   // Add event listener for bathroom count change to show/hide ensuite options
          //   const bathroomSelect = document.getElementById("boiler-bathrooms");
          //   if (bathroomSelect) {
          //     bathroomSelect.addEventListener("change", function() {
          //       updateEnsuiteCheckboxes(this.value);
          //     });
          //   }
          // }
        }
      });
    }
  }

  // Function to update ensuite checkboxes based on bathroom count
  function updateEnsuiteCheckboxes(bathroomCount) {
    // Remove existing ensuite checkbox group if any
    const existingEnsuiteGroup = document.getElementById("ensuite-checkbox-group");
    if (existingEnsuiteGroup) {
      existingEnsuiteGroup.remove();
    }

    if (bathroomCount && parseInt(bathroomCount) > 1) {
      const ensuiteGroup = document.createElement("div");
      ensuiteGroup.id = "ensuite-checkbox-group";
      ensuiteGroup.className = "form__group";

      const ensuiteLabel = document.createElement("label");
      ensuiteLabel.className = "form__label";
      ensuiteLabel.textContent = "Ensuite Bathrooms";

      ensuiteGroup.appendChild(ensuiteLabel);

      // Create checkboxes for each bathroom (excluding the first one)
      for (let i = 2; i <= parseInt(bathroomCount); i++) {
        const checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox-container";
        checkboxContainer.style.marginTop = "0.5rem";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `bathroom-${i}-ensuite`;
        checkbox.name = "ensuite-bathrooms";
        checkbox.value = `bathroom-${i}`;

        const label = document.createElement("label");
        label.htmlFor = `bathroom-${i}-ensuite`;
        label.className = "checkbox-label";
        label.textContent = `Bathroom ${i} is ensuite`;
        label.style.marginLeft = "0.5rem";
        label.style.fontWeight = "normal";

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        ensuiteGroup.appendChild(checkboxContainer);
      }

      // Insert after the bathroom count field
      const bathroomField = document.getElementById("boiler-bathrooms");
      if (bathroomField) {
        bathroomField.closest(".form__group").insertAdjacentElement("afterend", ensuiteGroup);
      }
    }
  }

  if (calculatorForm && calculatorResult && costRange) {
    calculatorForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const customerName = document.getElementById("quote-name").value;
      const customerEmail = document.getElementById("quote-email").value;
      const houseType = document.getElementById("house-type").value;
      const propertyAge = document.getElementById("property-age").value;
      const energyUsage = document.getElementById("energy-usage").value;
      
      // Get selected services from checkboxes
      const selectedServices = Array.from(serviceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      // Get all service-specific values
      const serviceSpecificValues = {};
      const dynamicFields = dynamicOptions.querySelectorAll("select, input");
      dynamicFields.forEach(field => {
        if (field.type === "checkbox") {
          serviceSpecificValues[field.id] = field.checked;
        } else {
          serviceSpecificValues[field.id] = field.value;
        }
      });

      // Validate required fields
      if (selectedServices.length === 0) {
        showNotification("Please select at least one service", "error");
        return;
      }

      if (!customerName || !customerEmail) {
        showNotification("Please provide your name and email address", "error");
        return;
      }

      if (!houseType || !propertyAge) {
        showNotification("Please fill in all required fields", "error");
        return;
      }

      // Show loading state
      const submitBtn = calculatorForm.querySelector('.calculator__submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending Request...';
      submitBtn.disabled = true;

      // Prepare quote request data
      const quoteRequest = {
        customerName: customerName,
        customerEmail: customerEmail,
        services: selectedServices,
        houseType: houseType,
        propertyAge: propertyAge,
        energyUsage: energyUsage || 'Not specified',
        serviceSpecificValues: serviceSpecificValues,
        timestamp: new Date().toISOString(),
        source: 'Website Calculator'
      };

      // Send quote request to sales email
      sendQuoteRequest(quoteRequest)
        .then(() => {
          // Show simple success message
          costRange.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
              <div style="font-size: 3rem; color: #28a745; margin-bottom: 1rem;">✓</div>
              <h3 style="color: #28a745; margin-bottom: 1rem;">Quote Request Sent!</h3>
              <p style="color: #666; font-size: 1.1rem;">Our team will contact you within 24 hours.</p>
            </div>
          `;
          calculatorResult.style.display = "block";
      calculatorResult.scrollIntoView({ behavior: "smooth", block: "center" });
          
          // Reset form
          calculatorForm.reset();
          updateDynamicOptions([]);
        })
        .catch((error) => {
          console.error('Quote request failed:', error);
          showNotification("Failed to send quote request. Please try again or contact us directly.", "error");
        })
        .finally(() => {
          // Reset button
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // ===== QUOTE REQUEST EMAIL FUNCTION =====
  function sendQuoteRequest(quoteData) {
    return new Promise((resolve, reject) => {
      console.log('Sending quote request with EmailJS...');
      
      // Initialize EmailJS if not already done
      if (typeof emailjs === 'undefined') {
        reject(new Error('EmailJS not loaded'));
        return;
      }
      
      // Initialize EmailJS with public key
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
      
      // Prepare email template parameters - simplified for debugging
      const templateParams = {
        to_email: 'sales@margav.energy',
        from_name: 'MarGav Solar Website',
        subject: `New Quote Request - ${quoteData.services.join(', ')} - ${quoteData.customerName}`,
        
        // Customer contact details
        customer_name: quoteData.customerName,
        customer_email: quoteData.customerEmail,
        
        // Basic customer details
        services: quoteData.services.join(', '),
        house_type: quoteData.houseType,
        property_age: quoteData.propertyAge,
        energy_usage: quoteData.energyUsage || 'Not specified',
        
        // Simple message body
        message: `New quote request from MarGav Solar website:

CUSTOMER CONTACT DETAILS:
========================
Name: ${quoteData.customerName}
Email: ${quoteData.customerEmail}

SERVICE REQUIREMENTS:
====================
Services: ${quoteData.services.join(', ')}
Property Type: ${quoteData.houseType}
Property Age: ${quoteData.propertyAge}
Energy Usage: ${quoteData.energyUsage || 'Not specified'}

Service Details:
${formatServiceDetails(quoteData.serviceSpecificValues)}

Requested at: ${new Date(quoteData.timestamp).toLocaleString('en-GB')}
Source: Website Calculator

Please contact ${quoteData.customerName} at ${quoteData.customerEmail} within 24 hours with a personalized quote.`,
        
        // Request metadata
        timestamp: new Date(quoteData.timestamp).toLocaleString('en-GB'),
        source: 'Website Calculator'
      };
      
      // Debug: Log the parameters being sent
      console.log('EmailJS Service ID:', CONFIG.EMAILJS_SERVICE_ID);
      console.log('EmailJS Template ID:', CONFIG.EMAILJS_TEMPLATE_ID);
      console.log('Template Parameters:', templateParams);
      
      // Send email using EmailJS
      emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then((response) => {
        console.log('Quote request email sent successfully:', response);
        resolve({
          success: true,
          message: 'Quote request sent successfully'
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        console.error('Error details:', error.text || error.message || error);
        reject(error);
      });
    });
  }
  
  // Helper function to format service details
  function formatServiceDetails(serviceDetails) {
    let formatted = '';
    
    Object.keys(serviceDetails).forEach(key => {
      if (serviceDetails[key] && serviceDetails[key] !== '') {
        const label = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        formatted += `${label}: ${serviceDetails[key]}\n`;
      }
    });
    
    return formatted || 'No specific details provided';
  }

  // Function to send contact form message via EmailJS
  function sendContactMessage(formData) {
    return new Promise((resolve, reject) => {
      console.log('Sending contact message with EmailJS...');
      
      // Initialize EmailJS if not already done
      if (typeof emailjs === 'undefined') {
        reject(new Error('EmailJS not loaded'));
        return;
      }
      
      // Initialize EmailJS with public key
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
      
      // Prepare email template parameters
      const templateParams = {
        to_email: 'sales@margav.energy',
        from_name: 'MarGav Solar Website',
        subject: `New Contact Form Message - ${formData.firstName} ${formData.lastName}`,
        
        // Customer details
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        property_address: formData.propertyAddress,
        property_type: formData.propertyType || 'Not specified',
        message: formData.message,
        
        // Formatted message body
        message_body: `📧 New contact form submission from MarGav Solar website:

👤 CUSTOMER CONTACT DETAILS:
============================
👨‍💼 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || 'Not provided'}

🏠 PROPERTY DETAILS:
====================
📍 Property Address: ${formData.propertyAddress}
🏘️ Property Type: ${formData.propertyType || 'Not specified'}

💬 MESSAGE:
===========
${formData.message}

📅 REQUEST DETAILS:
==================
⏰ Submitted at: ${new Date().toLocaleString('en-GB')}
🌐 Source: Contact Form

✅ NEXT STEPS:
==============
1. 📋 Review customer inquiry above
2. 📞 Contact ${formData.firstName} ${formData.lastName} at ${formData.email} within 24 hours
3. 💼 Address their specific questions/requirements
4. 📅 Schedule consultation if needed

---
🤖 This email was automatically generated from the MarGav Solar website contact form.`,
        
        // Request metadata
        timestamp: new Date().toLocaleString('en-GB'),
        source: 'Contact Form'
      };
      
      // Debug: Log the parameters being sent
      console.log('EmailJS Service ID:', CONFIG.EMAILJS_SERVICE_ID);
      console.log('EmailJS Contact Template ID:', CONFIG.EMAILJS_CONTACT_TEMPLATE_ID);
      console.log('Template Parameters:', templateParams);
      
      // Send email using EmailJS
      emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams
      )
      .then((response) => {
        console.log('Contact message email sent successfully:', response);
        resolve({
          success: true,
          message: 'Contact message sent successfully'
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        console.error('Error details:', error.text || error.message || error);
        reject(error);
      });
    });
  }

  // ===== COST CALCULATION FUNCTION REMOVED =====
  // This function has been removed as we now send quote requests to sales@margav.energy
  // instead of showing instant estimates on the website.

  // ===== NEWSLETTER FORM SUBMISSION =====
  const newsletterForm = document.querySelector(".newsletter__form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector(".newsletter__input").value;

      if (email) {
        // Simulate newsletter subscription
        showNotification(
          "Thank you for subscribing to our newsletter!",
          "success"
        );
        this.reset();
      }
    });
  }

  // ===== POSTCODE LOOKUP FUNCTIONALITY REMOVED =====
  // Postcode functionality removed - using Google Maps instead

    // Format postcode input - REMOVED
    // All postcode functionality removed - using Google Maps instead

    // Postcode lookup function
    async function lookupPostcode(postcode) {
      try {
        // Using a free UK postcode API (getAddress.io has a free tier)
        const response = await fetch(
          `https://api.getAddress.io/find/${encodeURIComponent(
            postcode
          )}?api-key=demo&expand=true`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Postcode not found");
        }

        const data = await response.json();
        return data.addresses || [];
      } catch (error) {
        console.error("Postcode lookup error:", error);
        // Fallback: return mock data for demo purposes
        return getMockAddresses(postcode);
      }
    }

    // Mock addresses for demo purposes
    function getMockAddresses(postcode) {
      const mockAddresses = {
        "SW1A 1AA": [
          "10 Downing Street, London",
          "11 Downing Street, London",
          "12 Downing Street, London",
        ],
        "M1 1AA": [
          "1 Piccadilly Gardens, Manchester",
          "2 Piccadilly Gardens, Manchester",
          "3 Piccadilly Gardens, Manchester",
        ],
        "B1 1AA": [
          "1 Bull Street, Birmingham",
          "2 Bull Street, Birmingham",
          "3 Bull Street, Birmingham",
        ],
        "LS1 1AA": [
          "1 City Square, Leeds",
          "2 City Square, Leeds",
          "3 City Square, Leeds",
        ],
        "L1 1AA": [
          "1 Liverpool One, Liverpool",
          "2 Liverpool One, Liverpool",
          "3 Liverpool One, Liverpool",
        ],
      };

      return (
        mockAddresses[postcode] || [
          `Sample Address 1, ${postcode}`,
          `Sample Address 2, ${postcode}`,
          `Sample Address 3, ${postcode}`,
        ]
      );
    }

    // All postcode functionality removed - using Google Maps instead

  // ===== CONTACT FORM SUBMISSION =====
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formObject = {};

      // Convert FormData to object
      for (let [key, value] of formData.entries()) {
        formObject[key] = value;
      }

      // Validate required fields
      const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "propertyAddress",
        "message",
        "privacy",
      ];
      let isValid = true;
      let missingFields = [];

      requiredFields.forEach((field) => {
        if (!formObject[field] || formObject[field].trim() === "") {
          isValid = false;
          missingFields.push(field);
        }
      });

      if (!isValid) {
        showNotification(
          `Please fill in all required fields: ${missingFields.join(", ")}`,
          "error"
        );
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formObject.email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Postcode validation removed - using Google Maps for location selection

      // Send email using EmailJS
      sendContactMessage(formObject)
        .then(() => {
          showNotification("Thank you for your message! We'll get back to you within 24 hours.", "success");
      this.reset();
        })
        .catch((error) => {
          console.error('Contact form submission failed:', error);
          showNotification("Failed to send message. Please try again or contact us directly.", "error");
        });
    });
  }

  // ===== NOTIFICATION SYSTEM =====
  function showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Style the notification
    const colors = {
      success: "#28A745",
      error: "#DC3545",
      info: "#007BFF",
    };

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: ${colors[type] || colors.info};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      max-width: 400px;
      word-wrap: break-word;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // ===== LANGUAGE SELECTOR FUNCTIONALITY =====
  const languageSelectors = document.querySelectorAll(
    ".language-selector, .language__select"
  );

  // Translation data
  const translations = {
    en: {
      // Navigation
      "nav-home": "Home",
      "nav-services": "Services", 
      "nav-process": "Process",
      "nav-team": "Team",
      "nav-calculator": "Request Quote",
      "nav-blog": "Blog",
      "nav-case-studies": "Case Studies",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      
      // Hero Section
      "hero-title": "Powering a Greener Future for UK Homes",
      "hero-subtitle": "Expert consultancy and installation of solar panels, and battery storage solutions for all types of UK properties.",
      "hero-cta": "Book a Free Consultation",
      
      // About Section
      "about-title": "About MarGav Solar",
      "about-subtitle": "Leading the UK's transition to sustainable energy solutions",
      "about-description": "At MARGAV Energy, our mission is to transform homes into comfortable, energy-efficient sanctuaries that reduce ongoing energy costs, making a positive impact on the environment and improving the lives of homeowners, landlords, and social housing providers.",
      
      // Services
      "services-title": "Our Services",
      "services-subtitle": "Comprehensive energy solutions tailored for all UK properties",
      "service-solar-title": "Solar Panels",
      "service-solar-description": "High-efficiency solar panel systems designed for all UK property types. Our installations preserve architectural integrity while maximizing energy generation and return on investment.",
      "service-solar-feature1": "Custom mounting solutions",
      "service-solar-feature2": "All property types expertise",
      "service-solar-feature3": "Industry leading warranties",
      "service-solar-learn-more": "Learn More",
      "service-battery-title": "Battery Storage",
      "service-battery-description": "Smart battery storage systems that store excess solar energy for use during peak times, reducing reliance on the grid and maximizing savings for any property type.",
      "service-battery-feature1": "Lithium-ion technology",
      "service-battery-feature2": "Smart energy management",
      "service-battery-feature3": "Peak-time optimization",
      "service-battery-learn-more": "Learn More",
      "service-boiler-title": "Boilers",
      "service-boiler-description": "Energy-efficient boiler installations and upgrades for all property types, ensuring optimal heating performance while reducing energy consumption and costs.",
      "service-boiler-feature1": "High-efficiency models",
      "service-boiler-feature2": "All property compatibility",
      "service-boiler-feature3": "Professional installation",
      "service-boiler-feature4": "Ongoing maintenance",
      "service-boiler-learn-more": "Learn More",
      "service-ev-title": "EV Chargers",
      "service-ev-description": "Professional electric vehicle charging point installations for residential and commercial properties, providing fast, safe, and reliable charging solutions for the future of transportation.",
      "service-ev-feature1": "Fast charging capabilities",
      "service-ev-feature2": "Smart charging technology",
      "service-ev-feature3": "OZEV approved installations",
      "service-ev-feature4": "Home and commercial solutions",
      "service-ev-learn-more": "Learn More",
      
      // Process
      "process-title": "Our Process",
      "process-subtitle": "From consultation to installation, we guide you every step of the way",
      "process-step1": "Book Consultation",
      "process-step1-description": "Schedule a free, no-obligation consultation to discuss your energy needs and property requirements.",
      "process-step2": "Property Assessment & Quotation",
      "process-step2-description": "Our experts conduct a thorough assessment of your property and provide a detailed, personalized quotation.",
      "process-step3": "Custom Energy Plan",
      "process-step3-description": "We design a tailored energy solution that meets your specific needs while respecting your property's character and requirements.",
      "process-step4": "Professional Installation",
      "process-step4-description": "Our certified technicians carry out the installation with minimal disruption to your daily routine.",
      "process-step5": "Aftercare & Support",
      "process-step5-description": "Ongoing maintenance and support to ensure your energy system performs optimally for years to come.",
      
      // Charity
      "charity-title": "We Give Back with Every Installation",
      "charity-subtitle": "Supporting local communities through sustainable energy initiatives",
      "charity-description": "For every solar panel installed, we donate to Our Partner Charity, helping make a positive impact beyond energy savings.",
      "charity-learn-more": "Learn More About Our Impact",
      
      // Calculator
      "calculator-title": "Request Quote",
      "calculator-subtitle": "Get an instant estimate for your solar energy needs",
      "calculator-result-title": "Quote Request Status",
      "calculator-request-quote": "Request Quote",
      
      // Blog
      "blog-title": "Latest Insights",
      "blog-subtitle": "Stay informed with our expert energy efficiency tips and industry updates",
      
      // Testimonials
      "testimonials-title": "What Our Customers Say",
      "testimonials-subtitle": "Real experiences from satisfied homeowners across the UK",
      
      // Team
      "team-title": "Meet the Team",
      "team-subtitle": "Experienced professionals dedicated to your energy transformation",
      "team-bio-title": "Our Expert Team",
      "team-bio-description": "At MarGav Solar, we're proud to have assembled a team of highly skilled professionals who are passionate about transforming UK homes into energy-efficient, sustainable spaces. Our diverse team brings together decades of combined experience in renewable energy, engineering, and customer service.",
      "team-expertise": "Expertise & Qualifications",
      "team-expertise-description": "MCS-certified engineers, NICEIC registered electricians, and renewable energy specialists with advanced qualifications in solar PV, battery storage, and EV charging systems.",
      "team-customer": "Customer-Focused Approach",
      "team-customer-description": "Our team is dedicated to providing personalized solutions that meet your specific energy needs while respecting your property's character and your budget requirements.",
      "team-installation": "Professional Installation",
      "team-installation-description": "From initial consultation to final commissioning, our experienced technicians ensure every installation meets the highest standards of quality, safety, and performance.",
      
      // Accreditations
      "accreditations-title": "Accreditations & Partners",
      "accreditations-subtitle": "Certified excellence in renewable energy solutions",
      
      // FAQ
      "faq-title": "Frequently Asked Questions",
      "faq-subtitle": "Everything you need to know about solar energy solutions",
      
      // Contact
      "contact-title": "Get In Touch",
      "contact-subtitle": "Ready to start your energy transformation journey?",
      "contact-info-title": "Contact Information",
      "contact-description": "We're here to help you make the switch to renewable energy. Get in touch with our expert team for personalized advice and support.",
      "contact-address": "Address",
      "contact-phone": "Phone",
      "contact-email": "Email",
      "contact-hours": "Business Hours",
      "contact-form-title": "Send us a Message",
      "contact-send": "Send Message",
      
      // Footer
      "footer-quick-links": "Quick Links",
      "footer-services": "Services",
      "footer-stay-updated": "Stay Updated",
      "footer-follow-us": "Follow Us",
      "footer-language": "Language:",
      "footer-subscribe": "Subscribe",
      "footer-privacy": "Privacy Policy",
      "footer-terms": "Terms of Service",
      "footer-cookies": "Cookie Policy"
    },
    es: {
      // Navigation
      "nav-home": "Inicio",
      "nav-services": "Servicios",
      "nav-process": "Proceso", 
      "nav-team": "Equipo",
      "nav-calculator": "Solicitar Cotización",
      "nav-blog": "Blog",
      "nav-case-studies": "Casos de Estudio",
      "nav-faq": "Preguntas Frecuentes",
      "nav-contact": "Contacto",
      
      // Hero Section
      "hero-title": "Impulsando un Futuro Más Verde para los Hogares del Reino Unido",
      "hero-subtitle": "Consultoría experta e instalación de paneles solares y soluciones de almacenamiento de baterías para todo tipo de propiedades del Reino Unido.",
      "hero-cta": "Reservar Consulta Gratuita",
      
      // About Section
      "about-title": "Acerca de MarGav Solar",
      "about-subtitle": "Liderando la transición del Reino Unido hacia soluciones de energía sostenible",
      "about-description": "En MARGAV Energy, nuestra misión es transformar hogares en santuarios cómodos y eficientes energéticamente que reduzcan los costos continuos de energía, generando un impacto positivo en el medio ambiente y mejorando las vidas de propietarios, arrendadores y proveedores de vivienda social.",
      
      // Services
      "services-title": "Nuestros Servicios",
      "services-subtitle": "Soluciones energéticas integrales adaptadas para todas las propiedades del Reino Unido",
      "service-solar-title": "Paneles Solares",
      "service-solar-description": "Sistemas de paneles solares de alta eficiencia diseñados para todos los tipos de propiedades del Reino Unido. Nuestras instalaciones preservan la integridad arquitectónica mientras maximizan la generación de energía y el retorno de la inversión.",
      "service-solar-feature1": "Soluciones de montaje personalizadas",
      "service-solar-feature2": "Experiencia en todos los tipos de propiedades",
      "service-solar-feature3": "Garantías líderes en la industria",
      "service-solar-learn-more": "Saber Más",
      "service-battery-title": "Almacenamiento de Baterías",
      "service-battery-description": "Sistemas inteligentes de almacenamiento de baterías que almacenan el exceso de energía solar para usar durante las horas pico, reduciendo la dependencia de la red y maximizando los ahorros para cualquier tipo de propiedad.",
      "service-battery-feature1": "Tecnología de iones de litio",
      "service-battery-feature2": "Gestión inteligente de energía",
      "service-battery-feature3": "Optimización de horas pico",
      "service-battery-learn-more": "Saber Más",
      "service-boiler-title": "Calderas",
      "service-boiler-description": "Instalaciones y actualizaciones de calderas energéticamente eficientes para todos los tipos de propiedades, asegurando un rendimiento de calefacción óptimo mientras se reduce el consumo de energía y los costos.",
      "service-boiler-feature1": "Modelos de alta eficiencia",
      "service-boiler-feature2": "Compatibilidad con todas las propiedades",
      "service-boiler-feature3": "Instalación profesional",
      "service-boiler-feature4": "Mantenimiento continuo",
      "service-boiler-learn-more": "Saber Más",
      "service-ev-title": "Cargadores EV",
      "service-ev-description": "Instalaciones profesionales de puntos de carga para vehículos eléctricos en propiedades residenciales y comerciales, proporcionando soluciones de carga rápidas, seguras y confiables para el futuro del transporte.",
      "service-ev-feature1": "Capacidades de carga rápida",
      "service-ev-feature2": "Tecnología de carga inteligente",
      "service-ev-feature3": "Instalaciones aprobadas por OZEV",
      "service-ev-feature4": "Soluciones domésticas y comerciales",
      "service-ev-learn-more": "Saber Más",
      
      // Process
      "process-title": "Nuestro Proceso",
      "process-subtitle": "Desde la consulta hasta la instalación, te guiamos en cada paso",
      "process-step1": "Reservar Consulta",
      "process-step1-description": "Programa una consulta gratuita sin compromiso para discutir tus necesidades energéticas y requisitos de propiedad.",
      "process-step2": "Evaluación de Propiedad y Cotización",
      "process-step2-description": "Nuestros expertos realizan una evaluación exhaustiva de tu propiedad y proporcionan una cotización detallada y personalizada.",
      "process-step3": "Plan Energético Personalizado",
      "process-step3-description": "Diseñamos una solución energética adaptada que cumple con tus necesidades específicas mientras respeta el carácter de tu propiedad y tus requisitos.",
      "process-step4": "Instalación Profesional",
      "process-step4-description": "Nuestros técnicos certificados realizan la instalación con una interrupción mínima de tu rutina diaria.",
      "process-step5": "Atención Postventa y Soporte",
      "process-step5-description": "Mantenimiento continuo y soporte para asegurar que tu sistema energético funcione de manera óptima durante años.",
      
      // Charity
      "charity-title": "Devolvemos con Cada Instalación",
      "charity-subtitle": "Apoyando a las comunidades locales a través de iniciativas de energía sostenible",
      "charity-description": "Por cada panel solar instalado, donamos a Nuestra Organización Benéfica Socia, ayudando a generar un impacto positivo más allá del ahorro energético.",
      "charity-learn-more": "Saber Más Sobre Nuestro Impacto",
      
      // Calculator
      "calculator-title": "Solicitar Cotización",
      "calculator-subtitle": "Obtén una estimación instantánea para tus necesidades de energía solar",
      "calculator-result-title": "Estado de Solicitud de Cotización",
      "calculator-request-quote": "Solicitar Cotización",
      
      // Blog
      "blog-title": "Últimas Perspectivas",
      "blog-subtitle": "Mantente informado con nuestros consejos expertos de eficiencia energética y actualizaciones de la industria",
      
      // Testimonials
      "testimonials-title": "Lo Que Dicen Nuestros Clientes",
      "testimonials-subtitle": "Experiencias reales de propietarios satisfechos en todo el Reino Unido",
      
      // Team
      "team-title": "Conoce al Equipo",
      "team-subtitle": "Profesionales experimentados dedicados a tu transformación energética",
      "team-bio-title": "Nuestro Equipo Experto",
      "team-bio-description": "En MarGav Solar, estamos orgullosos de haber reunido un equipo de profesionales altamente calificados que están apasionados por transformar hogares del Reino Unido en espacios energéticamente eficientes y sostenibles. Nuestro diverso equipo reúne décadas de experiencia combinada en energía renovable, ingeniería y servicio al cliente.",
      "team-expertise": "Experiencia y Calificaciones",
      "team-expertise-description": "Ingenieros certificados MCS, electricistas registrados NICEIC y especialistas en energía renovable con calificaciones avanzadas en PV solar, almacenamiento de baterías y sistemas de carga EV.",
      "team-customer": "Enfoque Centrado en el Cliente",
      "team-customer-description": "Nuestro equipo está dedicado a proporcionar soluciones personalizadas que cumplan con tus necesidades energéticas específicas mientras respetan el carácter de tu propiedad y tus requisitos de presupuesto.",
      "team-installation": "Instalación Profesional",
      "team-installation-description": "Desde la consulta inicial hasta la puesta en marcha final, nuestros técnicos experimentados aseguran que cada instalación cumpla con los más altos estándares de calidad, seguridad y rendimiento.",
      
      // Accreditations
      "accreditations-title": "Acreditaciones y Socios",
      "accreditations-subtitle": "Excelencia certificada en soluciones de energía renovable",
      
      // FAQ
      "faq-title": "Preguntas Frecuentes",
      "faq-subtitle": "Todo lo que necesitas saber sobre las soluciones de energía solar",
      
      // Contact
      "contact-title": "Ponte en Contacto",
      "contact-subtitle": "¿Listo para comenzar tu viaje de transformación energética?",
      "contact-info-title": "Información de Contacto",
      "contact-description": "Estamos aquí para ayudarte a hacer el cambio a energía renovable. Ponte en contacto con nuestro equipo experto para obtener consejos y soporte personalizados.",
      "contact-address": "Dirección",
      "contact-phone": "Teléfono",
      "contact-email": "Correo Electrónico",
      "contact-hours": "Horario Comercial",
      "contact-form-title": "Envíanos un Mensaje",
      "contact-send": "Enviar Mensaje",
      
      // Footer
      "footer-quick-links": "Enlaces Rápidos",
      "footer-services": "Servicios",
      "footer-stay-updated": "Mantente Actualizado",
      "footer-follow-us": "Síguenos",
      "footer-language": "Idioma:",
      "footer-subscribe": "Suscribirse",
      "footer-privacy": "Política de Privacidad",
      "footer-terms": "Términos de Servicio",
      "footer-cookies": "Política de Cookies"
    },
    fr: {
      // Navigation
      "nav-home": "Accueil",
      "nav-services": "Services",
      "nav-process": "Processus",
      "nav-team": "Équipe", 
      "nav-calculator": "Calculateur de Devis",
      "nav-blog": "Blog",
      "nav-case-studies": "Études de Cas",
      "nav-faq": "FAQ",
      "nav-contact": "Contact",
      
      // Hero Section
      "hero-title": "Transformez Votre Propriété En Une Maison Économe En Énergie",
      "hero-subtitle": "Conseil expert et installation de panneaux solaires et solutions de stockage de batteries pour tous types de propriétés britanniques.",
      "hero-cta": "Obtenez Votre Devis Gratuit",
      
      // Services
      "services-title": "Nos Services",
      "services-subtitle": "Solutions complètes d'énergie solaire adaptées à votre propriété",
      
      // Contact
      "contact-title": "Contactez-Nous",
      "contact-subtitle": "Contactez-nous pour une consultation gratuite",
      "contact-send": "Envoyer le Message",
      
      // Footer
      "footer-quick-links": "Liens Rapides",
      "footer-services": "Services",
      "footer-stay-updated": "Restez Informé",
      "footer-follow-us": "Suivez-Nous",
      "footer-language": "Langue:",
      "footer-subscribe": "S'abonner",
      "footer-privacy": "Politique de Confidentialité",
      "footer-terms": "Conditions de Service",
      "footer-cookies": "Politique des Cookies"
    },
    de: {
      // Navigation
      "nav-home": "Startseite",
      "nav-services": "Dienstleistungen",
      "nav-process": "Prozess",
      "nav-team": "Team",
      "nav-calculator": "Angebotsrechner",
      "nav-blog": "Blog",
      "nav-case-studies": "Fallstudien",
      "nav-faq": "FAQ",
      "nav-contact": "Kontakt",
      
      // Hero Section
      "hero-title": "Verwandeln Sie Ihr Eigentum In Ein Energieeffizientes Zuhause",
      "hero-subtitle": "Expertenberatung und Installation von Solarmodulen und Batteriespeicherlösungen für alle Arten von britischen Immobilien.",
      "hero-cta": "Erhalten Sie Ihr Kostenloses Angebot",
      
      // Services
      "services-title": "Unsere Dienstleistungen",
      "services-subtitle": "Umfassende Solarenergielösungen, die auf Ihre Immobilie zugeschnitten sind",
      
      // Contact
      "contact-title": "Kontaktieren Sie Uns",
      "contact-subtitle": "Kontaktieren Sie uns für eine kostenlose Beratung",
      "contact-send": "Nachricht Senden",
      
      // Footer
      "footer-quick-links": "Schnelle Links",
      "footer-services": "Dienstleistungen",
      "footer-stay-updated": "Bleiben Sie Informiert",
      "footer-follow-us": "Folgen Sie Uns",
      "footer-language": "Sprache:",
      "footer-subscribe": "Abonnieren",
      "footer-privacy": "Datenschutzrichtlinie",
      "footer-terms": "Nutzungsbedingungen",
      "footer-cookies": "Cookie-Richtlinie"
    }
  };

  // Function to translate page content
  function translatePage(language) {
    const translation = translations[language];
    if (!translation) return;

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translation[key]) {
        element.textContent = translation[key];
      }
    });

    // Update page direction for RTL languages if needed
    if (language === 'ar' || language === 'he') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }

  languageSelectors.forEach((selector) => {
    selector.addEventListener("change", function () {
      const selectedLanguage = this.value;

      // Store language preference
      localStorage.setItem("preferredLanguage", selectedLanguage);

      // Translate the page
      translatePage(selectedLanguage);

      // Show notification
      const languageNames = {
        en: "English",
        es: "Español",
        fr: "Français",
        de: "Deutsch",
      };

      showNotification(
        `Language changed to ${languageNames[selectedLanguage]}`,
        "info"
      );
    });
  });

  // ===== LOAD SAVED LANGUAGE PREFERENCE =====
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    languageSelectors.forEach((selector) => {
      selector.value = savedLanguage;
    });
    // Translate the page to the saved language
    translatePage(savedLanguage);
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".service__card, .blog__card, .testimonial__card, .accreditation__item, .faq__item"
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });

  // ===== FORM VALIDATION ENHANCEMENTS =====
  const formInputs = document.querySelectorAll(".form__input, .form__select");

  formInputs.forEach((input) => {
    // Add focus and blur effects
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
      validateInput(this);
    });

    // Real-time validation
    input.addEventListener("input", function () {
      validateInput(this);
    });
  });

  function validateInput(input) {
    const value = input.value.trim();
    const isRequired = input.hasAttribute("required");
    const isValid = isRequired ? value.length > 0 : true;

    if (isValid) {
      input.style.borderColor = "#28A745";
      input.style.boxShadow = "0 0 0 3px rgba(40, 167, 69, 0.1)";
    } else {
      input.style.borderColor = "#DC3545";
      input.style.boxShadow = "0 0 0 3px rgba(220, 53, 69, 0.1)";
    }

    return isValid;
  }

  // ===== SCROLL TO TOP FUNCTIONALITY =====
  // Create scroll to top button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.setAttribute("aria-label", "Scroll to top");

  // Style the button
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #28A745;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;

  document.body.appendChild(scrollToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ===== PERFORMANCE OPTIMIZATION =====
  // Lazy load images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // ===== FAQ ACCORDION =====
  const faqQuestions = document.querySelectorAll(".faq__question");

  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      const answer = this.parentElement.querySelector(".faq__answer");

      // Close any open items (optional: accordion behavior)
      faqQuestions.forEach((otherBtn) => {
        if (otherBtn !== this) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherAnswer =
            otherBtn.parentElement.querySelector(".faq__answer");
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      // Toggle current
      this.setAttribute("aria-expanded", String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });


  // ===== OPENSTREETMAP INTEGRATION =====
  // OpenStreetMap with Leaflet provides a free alternative to Google Maps
  // No API key required - works on localhost and production

  // ===== CONSOLE WELCOME MESSAGE =====
  console.log(
  "%c🌱 MarGav Solar Website",
    "color: #28A745; font-size: 20px; font-weight: bold;"
  );
  console.log(
    "%cWelcome to our energy consultancy website!",
    "color: #666; font-size: 14px;"
  );
  console.log(
    "%cFor any technical questions, please contact our development team.",
    "color: #999; font-size: 12px;"
  );

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== DOMContentLoaded function closing =====
}); // End of DOMContentLoaded

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ===== ERROR HANDLING =====
window.addEventListener("error", function (e) {
  console.error("JavaScript Error:", e.error);
  // In production, you might want to send this to an error tracking service
});

// ===== SERVICE WORKER REGISTRATION (for future PWA features) =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('SW registered'))
    //     .catch(error => console.log('SW registration failed'));
  });
}
