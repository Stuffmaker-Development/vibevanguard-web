document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById("hamburger")
    const navLinks = document.getElementById("navLinks")
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
  
      // Close mobile menu when clicking on a nav link
      const navItems = document.querySelectorAll(".nav-links ul li a")
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          hamburger.classList.remove("active")
          navLinks.classList.remove("active")
        })
      })
    }
  
    // Animated Waveform
    const waves = document.querySelectorAll(".wave")
    waves.forEach((wave) => {
      // Randomize the initial state of the waves
      wave.style.animationDelay = `${Math.random() * 1}s`
    })
  
    // Donation Float Functionality
    const donationFloat = document.getElementById("donationFloat")
    const closeBtn = document.getElementById("closeBtn")
  
    if (donationFloat && closeBtn) {
      // Show donation float after 5 seconds
      setTimeout(() => {
        donationFloat.style.display = "flex"
      }, 5000)
  
      // Close donation float
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        donationFloat.style.display = "none"
      })
  
      // Redirect to donation page when clicked
      donationFloat.addEventListener("click", () => {
        window.location.href = "https://mr.stuffmaker.net/donate"
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Intersection Observer for animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    // Observe elements to animate
    const animateElements = document.querySelectorAll(".feature-card, .pricing-card, .command-card, .stat-item")
    animateElements.forEach((element) => {
      observer.observe(element)
    })
  
    // Add animation classes
    document.querySelectorAll(".feature-card, .pricing-card, .command-card, .stat-item").forEach((element, index) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      element.style.transitionDelay = `${index * 0.1}s`
    })
  
    // Animation class
    document.addEventListener("scroll", () => {
      document.querySelectorAll(".animate").forEach((element) => {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      })
    })
  
    // Trigger initial animation check
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"))
    }, 100)
  })
  //Footer Year Update
  document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});