export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`page-header ${center ? 'text-center' : ''}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1 className="section-title mt-3">{title}</h1>
      {description && <p className={`section-copy ${center ? 'mx-auto' : ''}`}>{description}</p>}
    </div>
  )
}
