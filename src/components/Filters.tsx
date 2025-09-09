"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const rovers = ["curiosity", "opportunity", "spirit"];
const roverCameras: { [key: string]: string[] } = {
  curiosity: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
  opportunity: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  spirit: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
};
const defaultDates: { [key:string]: string } = {
  curiosity: '2024-01-01',
  opportunity: '2018-06-01',
  spirit: '2010-02-01',
};

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const roverValue = searchParams.get("rover") || 'curiosity';
  const cameraValue = searchParams.get("camera") || '';
  const dateValue = searchParams.get("earth_date") || defaultDates[roverValue];
  
  const availableCameras = roverCameras[roverValue];

  const handleFilterChange = (filterName: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1"); 

    if (filterName === "rover") {
      params.set("rover", value);
      params.set("earth_date", defaultDates[value]);
      params.delete("camera"); 
    } else {
      if (value) {
        params.set(filterName, value);
      } else {
        params.delete(filterName);
        if (filterName === "earth_date") {
          params.set("earth_date", defaultDates[roverValue]);
        }
      }
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDayChange = (amount: number) => {
    const [year, month, day] = dateValue.split('-').map(Number);
    const currentDate = new Date(Date.UTC(year, month - 1, day));
    currentDate.setUTCDate(currentDate.getUTCDate() + amount);
    const newDate = currentDate.toISOString().split('T')[0];
    handleFilterChange("earth_date", newDate);
  };

  return (
    <div className="mb-8 p-5 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center justify-center">
      <div className="w-full md:w-auto flex-grow flex flex-col sm:flex-row gap-6">
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="rover" className="block text-sm font-medium text-gray-800 mb-1">Rover</label>
          <select id="rover" className="w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={roverValue} onChange={(e) => handleFilterChange("rover", e.target.value)}>
            {rovers.map((rover) => (<option key={rover} value={rover}>{rover.charAt(0).toUpperCase() + rover.slice(1)}</option>))}
          </select>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="camera" className="block text-sm font-medium text-gray-800 mb-1">Câmara</label>
          <select id="camera" className="w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={cameraValue} onChange={(e) => handleFilterChange("camera", e.target.value)}>
            <option value="">Todas</option>
            {availableCameras.map((cam) => (<option key={cam} value={cam}>{cam}</option>))}
          </select>
        </div>
      </div>
      
      <div className="w-full md:w-auto">
        <label htmlFor="earth_date" className="block text-sm font-medium text-gray-800 mb-1">Data Terrestre</label>
        <div className="flex items-center">
          <button onClick={() => handleDayChange(-1)} className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 transition-colors">-</button>
          <input type="date" id="earth_date" className="w-full py-2 px-3 border-t border-b border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={dateValue} onChange={(e) => handleFilterChange("earth_date", e.target.value)} />
          <button onClick={() => handleDayChange(1)} className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-lg bg-gray-50 hover:bg-gray-100 transition-colors">+</button>
        </div>
      </div>
    </div>
  );
}

