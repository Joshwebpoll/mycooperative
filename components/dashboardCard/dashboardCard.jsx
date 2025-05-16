import { CreditCard, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DahboardCards({ totalNumber, title, Icon }) {
  return (
    <Card className="@container/card h-[125px] shadow-2xl">
      <CardHeader className="relative">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="@[250px]/card:text-2xl text-2xl font-semibold tabular-nums">
          {totalNumber}
        </CardTitle>
        <div className="absolute right-4 top-4">
          {/* <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            <CreditCard size="50" />
          </Badge> */}
          <div className="bg-blue-100 p-3 rounded-full">
            <Icon className="w-5 h-5 text-[#206bc4]" />
          </div>
        </div>
      </CardHeader>
      {/* <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <TrendingUpIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">
          Visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
