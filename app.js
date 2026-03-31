const { createApp } = Vue;

createApp({
  data() {
    return {
      currentYear: new Date().getFullYear(),
      navLinks: [
        { label: 'Home', href: 'index.html' },
        { label: 'How it works', href: 'how-it-works.html' },
        { label: 'Designers', href: 'designers.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Contact', href: 'contact.html' }
      ],
      processSteps: [
        {
          number: '01',
          title: 'Share your vision',
          text: 'Tell us about your space, style preferences, and project goals.',
          image: 'assets/get.jpeg'
        },
        {
          number: '02',
          title: 'Get matched',
          text: 'We curate 3-5 designers whose work aligns with your vision.',
          image: 'assets/match.jpeg'
        },
        {
          number: '03',
          title: 'Connect & create',
          text: 'Meet your matches and begin your beautiful transformation.',
          image: 'assets/sofa.png'
        }
      ],
      howItWorks: [
        {
          label: 'Discovery',
          title: 'Style questionnaire',
          text: 'Share photos of your space, your aesthetic preferences, and project details.',
          image: 'assets/get.jpeg',
          alt: 'User holding interior design inspiration photo'
        },
        {
          label: 'Matching',
          title: 'Designer curation',
          text: 'Our team reviews your profile and selects designers with complementary expertise.',
          image: 'assets/match.jpeg',
          alt: 'Matching concept visual'
        },
        {
          label: 'Connection',
          title: 'Personal introductions',
          text: 'We facilitate warm introductions and help you choose your perfect match.',
          image: 'assets/living.png',
          alt: 'Living room design'
        }
      ],
      designers: [
        {
          name: 'Elena Vasquez',
          location: 'Los Angeles, CA',
          rating: '4.9',
          style: 'Modern Minimalist',
          description: 'Specializes in clean lines and functional luxury for contemporary homes.',
          image: 'assets/living.png',
          alt: 'Living room by Elena'
        },
        {
          name: 'Marcus Chen',
          location: 'New York, NY',
          rating: '5.0',
          style: 'Eclectic Boho',
          description: 'Creates warm, layered spaces that tell unique stories through texture and color.',
          image: 'assets/2.jpeg',
          alt: 'Eclectic design by Marcus'
        },
        {
          name: 'Sophia Rodriguez',
          location: 'Austin, TX',
          rating: '4.8',
          style: 'Rustic Modern',
          description: 'Blends natural materials with contemporary forms for timeless appeal.',
          image: 'assets/3.jpeg',
          alt: 'Rustic modern style example'
        }
      ],
      galleryImages: [
        { src: 'assets/preferance.jpeg', alt: 'Designer project 1' },
        { src: 'assets/2.jpeg', alt: 'Designer project 2' },
        { src: 'assets/3.jpeg', alt: 'Designer project 3' }
      ],
      footerLinks: [
        { label: 'Home', href: 'index.html' },
        { label: 'How it works', href: 'how-it-works.html' },
        { label: 'Designers', href: 'designers.html' },
        { label: 'About', href: 'about.html' },
        { label: 'Contact', href: 'contact.html' },
        { label: 'Privacy', href: '#privacy' }
      ],
      socialLinks: [
        { label: 'Instagram', href: 'https://instagram.com/designconnect' },
        { label: 'Pinterest', href: 'https://pinterest.com/designconnect' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/designconnect' }
      ]
    };
  }
}).mount('#app');