import React  from 'react';

interface PersonCardProps {
  person: {
    name: string;
    age: number;
    cpf: string;
    email: string;
    phone: string;
    address: string;
    birthDate: string;
    status: string;
    foto: File;
  };
}

const handlePicture = (foto: string) => {
  return foto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnkvWswxo4kJ2q9fcnsEx9GD-Q_npU7cEcA&s';
};

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="card bg-primary-light shadow-md rounded-lg p-4 flex flex-col gap-4">
      <div className="flex">
        <div className="card-content flex flex-col gap-2 pr-4 border-r border-gray-300">
          <img
            src={handlePicture(person?.foto ? URL.createObjectURL(person?.foto) : "")}
            alt=""
            className="w-[100px] sm:w-[150px] rounded-lg"
          />
          <div>
            <h5 className="text-sm font-semibold">Nascimento</h5>
            <span className="text-sm">{person.birthDate}</span>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Idade</h5>
            <span className="text-sm">{person.age} Anos</span>
          </div>
        </div>
        <div className="card-content flex flex-col gap-4 sm:gap-6 pl-4 text-sm sm:text-base">
          <h2 className="text-lg font-bold">{person.name}</h2>
          <span><strong>CPF:</strong> {person.cpf}</span>
          <span><strong>E-mail:</strong> {person.email}</span>
          <span><strong>Telefone:</strong> {person.phone}</span>
          <span><strong>Endereço:</strong> {person.address}</span>
          <span><strong>Status:</strong> {person.status}</span>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 flex justify-end">
        <button
          className="bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2"
        >
          Ver perfil
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
