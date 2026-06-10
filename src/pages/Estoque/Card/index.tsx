import { Container } from "./styles";
import { ROXO_40 } from "../../../utils/constants";
import type { IconType } from "react-icons";

interface CardProps {
  title: string;
  headerText: string;
  icon: IconType;
  footerValue: string | number;
  footerText: string;
  valueIcon: IconType;
  color: string;
  bgColor: string;
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
}: CardProps) => {
  return (
    <Container $bgColor={bgColor}>
      <div className="estoque-header">
        <div className="content">
          <span className="title">{title}</span>
          <span className="value">{headerText}</span>
        </div>
        <div className="icon">
          <Icon size={22} color={color} />
        </div>
      </div>
      <div className="estoque-footer">
        <span className="valor-estoque">
          <ValueIcon size={10} color={color} /> {footerValue}
        </span>
        <span>{footerText}</span>
      </div>
    </Container>
  );
};
