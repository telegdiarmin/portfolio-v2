export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
}

export const profileData: ProfileData = {
  name: 'Armin Telegdi',
  title: 'Software Developer',
  bio: 'Passionate about creating efficient and scalable web applications.',
  email: 'contact@example.com',
  location: 'Location',
  avatar: '/src/resources/images/profile-picture.jpg'
};