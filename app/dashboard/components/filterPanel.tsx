'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

const FilterPanel = ({ onFilter }: { onFilter?: (term: string) => void }) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-6">
      <div className="flex items-center gap-2 flex-1">
        <Input
          type="text"
          placeholder="search..."
          className="flex-1"
          onChange={(e) => onFilter?.(e.target.value)}
        />
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          filter
        </Button>
      </div>
      <Button className="bg-primary text-black" >
        Add New
      </Button>
    </div>
  );
};

export default FilterPanel;
