// Internal deps
import QuickFilters from "./QuickFilters/QuickFilters";
import SearchInput from "./SearchInput/SearchInput";

function MovementsFilters() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="px-6">
        <SearchInput />
      </div>

      <div className="ps-6">
        <QuickFilters />
      </div>
    </div>
  );
}

export default MovementsFilters;
