interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'center' | 'right' | 'left'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClasses = {
    center: 'text-center',
    right: 'text-right',
    left: 'text-left',
  }

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="section-title relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary transform scale-x-50 transition-transform group-hover:scale-x-100"></div>
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-4">{subtitle}</p>
      )}
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1 bg-secondary rounded"></div>
      </div>
    </div>
  )
}

