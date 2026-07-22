// utils/renderHelpers.tsx
export const renderBody = (text: string, highlights?: string[]) => {
  if (!highlights || highlights.length === 0) {
    return <span className="text-gray-600">{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  const highlightPositions: { start: number; end: number; text: string }[] = [];
  
  highlights.forEach(highlight => {
    const index = text.indexOf(highlight);
    if (index !== -1) {
      highlightPositions.push({
        start: index,
        end: index + highlight.length,
        text: highlight
      });
    }
  });

  highlightPositions.sort((a, b) => a.start - b.start);

  highlightPositions.forEach((pos, i) => {
    if (pos.start > lastIndex) {
      parts.push(
        <span key={`text-${i}`} className="text-gray-600">
          {text.substring(lastIndex, pos.start)}
        </span>
      );
    }
    
    parts.push(
      <span key={`highlight-${i}`} className="text-[var(--primary-pink)] font-bold">
        {pos.text}
      </span>
    );
    
    lastIndex = pos.end;
  });

  if (lastIndex < text.length) {
    parts.push(
      <span key="text-end" className="text-gray-600">
        {text.substring(lastIndex)}
      </span>
    );
  }

  return parts;
};