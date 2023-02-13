import { CSSProperties, FC, SVGProps } from 'react';
import { Icon as Iconify, IconProps as IconifyProps } from '@iconify/react';

type IconProps = {
  name: string;
  svg?: boolean;
  color?: CSSProperties['color'];
  size?: number;
} & Partial<IconifyProps> &
  SVGProps<SVGElement>;

const Icon: FC<IconProps> = ({ name, color, svg, size, ...props }) => {
  return svg ? (
    <svg
      aria-hidden="true"
      {...props}
      width={size}
      height={size}
      inline-block
      overflow-hidden
    >
      <use href={`#icon-${name}`} fill={color} />
    </svg>
  ) : (
    <Iconify {...props} width={size} height={size} icon={name} />
  );
};

export default Icon;
