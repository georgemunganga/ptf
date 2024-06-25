import logoImg from '@public/logo-primary.png';
import Image from 'next/image';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
    <Image src={logoImg} alt="CSPR" />
  );
}
