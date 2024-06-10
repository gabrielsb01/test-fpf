import { create } from "zustand";

interface Person {
  name: string;
  age: number;
  cpf: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  status: string;
  gender: string;
  foto: File;
}

interface PersonState {
  people: Person[];
  addPerson: (person: Person) => void;
}

export const usePersonStore = create<PersonState>((set) => ({
  people: [],
  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, person],
    })),
}));
