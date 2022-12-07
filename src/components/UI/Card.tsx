import classes from "./Card.module.css";

export const Card = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};
