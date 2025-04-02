type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  
  export const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Search..."}
        className="px-3 py-2 border rounded w-full max-w-sm"
      />
    );
  };
  