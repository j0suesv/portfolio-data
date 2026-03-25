function isImageSrc(icon) {
  return (
    typeof icon === 'string' &&
    (icon.startsWith('/') ||
      icon.startsWith('http://') ||
      icon.startsWith('https://') ||
      /\.(svg|png|jpe?g|webp|gif)$/i.test(icon))
  )
}

export default function IconMedia({ icon, className, alt = '' }) {
  if (isImageSrc(icon)) {
    return (
      <img
        src={icon}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    )
  }
  return <span className={className}>{icon}</span>
}
