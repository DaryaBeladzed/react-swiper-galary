import classes from "./Info.module.scss";

const Info = ({ hide }) => {
  return (
    <div className={`${classes.info} ${hide ? classes.hidden : ""}`}>
      <div className={classes.logo}>Miami</div>
      <div className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni
        libero eveniet ea, sed molestias quos voluptatum sapiente praesentium
        recusandae a ut animi aspernatur quia officia dolorum. Ipsam, excepturi
        animi?
      </div>
    </div>
  );
};

export default Info;
