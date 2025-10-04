import "./Profile.scss";
import type { ProfileProps } from "./profile.types";

export const Profile = ({ data, children }: ProfileProps) => {
  return (
    <div className='profile'>
      <h1 className='profile__title'>{`<${data.name}/>`}</h1>

      {children}

      <h2 className='profile__subtitle'>Profile</h2>

      <p className='profile__bio'>{data.bio} </p>

      <p className='profile__contact'>
        If you think I'd fit into your team, please don't hesitate to{" "}
        <a href={`mailto:${data.email}`} className='profile__link'>
          reach out to me
        </a>
        !
      </p>
    </div>
  );
};
