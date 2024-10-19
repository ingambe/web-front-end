"use client";

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

export default function AdvancedFilters({ filters, onFilterChange, onClearFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ [name]: value });
  };

  const handleSliderChange = (name, value) => {
    setLocalFilters((prev) => ({ ...prev, [name]: value[0] }));
    onFilterChange({ [name]: value[0] });
  };

  const handleSelectChange = (name, value) => {
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Advanced Filters</h2>
        <Button onClick={onClearFilters} variant="outline" className="w-full">
          Clear Filters
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="estimatedCurrency">Estimated Currency</Label>
          <Select
            value={localFilters.estimatedCurrency}
            onValueChange={(value) => handleSelectChange('estimatedCurrency', value)}
          >
            <SelectTrigger id="estimatedCurrency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="propertyCondition">Property Condition</Label>
          <Select
            value={localFilters.propertyCondition}
            onValueChange={(value) => handleSelectChange('propertyCondition', value)}
          >
            <SelectTrigger id="propertyCondition">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
              <SelectItem value="poor">Poor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="estimatedPrice">Estimated Price Range</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Adjust the slider to set the estimated price range</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              id="minEstimatedPrice"
              name="minEstimatedPrice"
              value={localFilters.minEstimatedPrice}
              onChange={handleInputChange}
              placeholder="Min"
            />
            <Input
              type="number"
              id="maxEstimatedPrice"
              name="maxEstimatedPrice"
              value={localFilters.maxEstimatedPrice}
              onChange={handleInputChange}
              placeholder="Max"
            />
          </div>
        </div>

        <RangeSlider
          label="Location Grade"
          name="locationGrade"
          value={[localFilters.minLocationGrade, localFilters.maxLocationGrade]}
          onChange={(value) => {
            handleSliderChange('minLocationGrade', [value[0]]);
            handleSliderChange('maxLocationGrade', [value[1]]);
          }}
          min={0}
          max={10}
          step={0.1}
          tooltip="Rate the property's location from 0 to 10"
        />

        <RangeSlider
          label="Price Grade"
          name="priceGrade"
          value={[localFilters.minPriceGrade, localFilters.maxPriceGrade]}
          onChange={(value) => {
            handleSliderChange('minPriceGrade', [value[0]]);
            handleSliderChange('maxPriceGrade', [value[1]]);
          }}
          min={0}
          max={10}
          step={0.1}
          tooltip="Rate the property's price from 0 to 10"
        />

        <RangeSlider
          label="Amenities Grade"
          name="amenitiesGrade"
          value={[localFilters.minAmenitiesGrade, localFilters.maxAmenitiesGrade]}
          onChange={(value) => {
            handleSliderChange('minAmenitiesGrade', [value[0]]);
            handleSliderChange('maxAmenitiesGrade', [value[1]]);
          }}
          min={0}
          max={10}
          step={0.1}
          tooltip="Rate the property's amenities from 0 to 10"
        />

        <RangeSlider
          label="Global Grade"
          name="globalGrade"
          value={[localFilters.minGlobalGrade, localFilters.maxGlobalGrade]}
          onChange={(value) => {
            handleSliderChange('minGlobalGrade', [value[0]]);
            handleSliderChange('maxGlobalGrade', [value[1]]);
          }}
          min={0}
          max={10}
          step={0.1}
          tooltip="Overall rating of the property from 0 to 10"
        />
      </div>
    </div>
  );
}

function RangeSlider({ label, name, value, onChange, min, max, step, tooltip }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={name}>{label}</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Slider
        id={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={onChange}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{value[0]}</span>
        <span>{value[1]}</span>
      </div>
    </div>
  );
}