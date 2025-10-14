import { Heading } from "../heading";
import "./Profile.scss";
import type { ProfileProps } from "./profile.types";

export const Profile = ({ data, children }: ProfileProps) => {
  return (
    <>
      <Heading text={`<${data.name}/>`} size='large' />

      {children}

      <Heading text='Profile' size='normal' />

      <div>
        <span className='profile__bio'>{data.bio} </span>
        <span className='profile__bio'>
          If you think I'd fit into your team, please don't hesitate to{" "}
          <a href={`mailto:${data.email}`} className='profile__link'>
            reach out to me
          </a>
          !
        </span>
      </div>
    </>
  );
};
