
import React, { useState } from "react";

// expects array value, calls onChange with new array, supports custom value add
type Props = {
  value: string[];
  onChange: (val: string[]) => void;
  options: string[];
  placeholder?: string;
};

const SpecialtyMultiSelect: React.FC<Props> = ({ value, onChange, options, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const isExisting = inputValue && options.includes(inputValue);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((v, idx) => (
          <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs flex items-center">
            {v}
            <button
              type="button"
              className="ml-1 text-red-400 hover:text-red-700"
              onClick={() => onChange(value.filter(s => s !== v))}
              title="Supprimer"
            >×</button>
          </span>
        ))}
      </div>
      <input
        list="specialty-list"
        className="w-full border rounded p-2"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder={placeholder ?? "Sélectionnez ou ajoutez une spécialité"}
        onKeyDown={e => {
          if (e.key === "Enter" && inputValue) {
            if (!value.includes(inputValue)) {
              onChange([...value, inputValue]);
              setInputValue("");
            }
            e.preventDefault();
          }
        }}
      />
      <datalist id="specialty-list">
        {options.map(opt => <option value={opt} key={opt} />)}
      </datalist>
      <button
        type="button"
        className="mt-2 text-sm px-3 py-1 bg-primary/80 text-white rounded hover:bg-primary"
        disabled={!inputValue || value.includes(inputValue)}
        onClick={() => {
          if (inputValue && !value.includes(inputValue)) {
            onChange([...value, inputValue]);
            setInputValue("");
          }
        }}
      >Ajouter</button>
    </div>
  );
};

export default SpecialtyMultiSelect;
