"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atomics/button";
import { Calendar } from "@/components/atomics/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atomics/popover";
import { useState } from "react";

interface DatePickerDemoProps {
  placeholder: string;
}

export function DatePickerDemo({ placeholder }: DatePickerDemoProps) {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"third"}
          className={cn(
            "w-full justify-between text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <div className="flex gap-4">
            <Image
              src="/icons/calendar.svg"
              alt="icon"
              height={24}
              width={24}
            />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </div>
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="w-full min-w-[358px] rounded-lg bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}
