import { Container } from "./styles";
import { ROXO_40 } from "../../../utils/constants";
import type { IconType } from "react-icons";

interface CardProps {
  title: string;
  headerText: string;
  icon: IconType;
  footerText: string;
  footerIcon: IconType;
}

export const Card = ({
  title,
  headerText,
  icon: Icon,
  footerText,
  footerIcon,
}: CardProps) => {
  return (
    <Container>
      <div className="estoque-header">
        <div className="content">
          <span className="title">{title}</span>
          <span className="value">{headerText}</span>
        </div>
        <div className="icon">
          <Icon size={22} color={`${ROXO_40}`} />
        </div>
      </div>
      <div className="estoque-footer">${footerText}</div>
    </Container>
  );
};
