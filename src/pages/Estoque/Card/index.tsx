import { Container } from './styles';
import type { IconType } from 'react-icons';

interface CardProps {
  title: string;
  headerText: string;
  footerValue: string | number;
  footerText: string;
  valueIcon?: IconType;
  icon?: IconType;
  color?: string;
  bgColor?: string;
  width?: string;
}

export const Card = ({
  title,
  headerText,
  icon: Icon,
  footerValue,
  footerText,
  valueIcon: ValueIcon,
  color,
  bgColor,
  width = '320px',
}: CardProps) => {
  return (
    <Container $width={width} $bgColor={bgColor}>
      <div className="estoque-header">
        <div className="content">
          <span className="title">{title}</span>

          <span className="value">{headerText}</span>
        </div>

        {Icon && (
          <div className="icon">
            <Icon size={22} color={color} />
          </div>
        )}
      </div>

      <div className="estoque-footer">
        <span className="valor-estoque">
          {ValueIcon && <ValueIcon size={10} color={color} />}

          {footerValue}
        </span>

        <span>{footerText}</span>
      </div>
    </Container>
  );
};
