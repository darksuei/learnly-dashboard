import { createContext } from "react";

type ProfileContextType = {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  gain?: string;
  setGain?: React.Dispatch<React.SetStateAction<string>>;
};

export const ProfileContext = createContext<ProfileContextType>({});
