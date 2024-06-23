interface TooltipProps {
  styles?: string
}

export const Tooltip: React.FC<TooltipProps> = ({styles=""}) => {
  return (
    <div data-tooltip="A sample text" className={`${styles}`}>Tooltip</div>
  )
}