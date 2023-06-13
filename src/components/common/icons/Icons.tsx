import Icons from "../../../img/icon/sprite.svg";

interface IIcon {
  name: string;
  classIcon: string;
}

const Icon = ({ name, classIcon }: IIcon) => (
  <svg className={classIcon}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;
