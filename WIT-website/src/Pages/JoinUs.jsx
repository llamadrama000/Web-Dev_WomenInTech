import { useEffect } from 'react';

function JoinUs() {
  useEffect(() => {
    // Redirect to the Google Form link
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfFZKpcMzfrsDnQopEoeKCzhD2rrWzPALADaOaxjcTWUdUcRg/viewform";
  }, []);

  return null; // No need to render anything
}

export default JoinUs;
