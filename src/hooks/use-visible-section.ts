import { useEffect, useState } from "react";

export function useVisibleSection(sections: string[]) {
  const [visibleSectionId, setVisibleSectionId] = useState<
    string | undefined
  >();

  function isSectionVisible(elementId: string) {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      const viewPortHeight = window.innerHeight;

      return sectionPosition.top <= viewPortHeight / 2; // section is visible only after showing up at the center of the page or above
    }

    return false;
  }

  useEffect(() => {
    // perfomance?
    function checkVisibility() {
      if (sections.every((id) => !isSectionVisible(id))) {
        setVisibleSectionId(undefined);
      }
      sections.forEach((id) => {
        if (isSectionVisible(id)) {
          setVisibleSectionId(id);
        }
      });
    }

    if (sections) {
      window.addEventListener("scroll", checkVisibility);
    }

    checkVisibility();

    return () => window.removeEventListener("scroll", checkVisibility);
  }, [sections]);

  return visibleSectionId;
}
