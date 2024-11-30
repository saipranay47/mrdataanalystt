"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PurchaseWidgetProps {
  title: string;
  description: string;
  price: string;
  previewImg: string;
}

export function PurchaseWidget({
  title,
  description,
  price,
  previewImg,
}: PurchaseWidgetProps) {
  return (
    <div className="rounded-lg border bg-card p-4 h-fit">
      <div className="mb-6">
        <img
          src={previewImg}
          alt="Product Preview"
          className="rounded-lg object-cover h-40 w-full"
          width={300}
          height={300}
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <Badge variant="secondary">{price}</Badge>
      </div>
      <div className="mt-6 space-y-4">
        <Button className="w-full">Purchase Now</Button>
        <Button variant="outline" className="w-full">
          Live Preview
        </Button>
      </div>
    </div>
  );
}
