"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CustomDetailsDialog } from "@/components/veiwdetailsmodal/dialogModal";

export default function ProfileEditModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        View Profile
      </Button>

      <CustomDetailsDialog
        open={open}
        onOpenChange={setOpen}
        title="User Profile"
        description="Basic information about the user."
        footer={
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <div className="space-y-4 text-sm text-muted-foreground">
          <DetailRow label="Full Name" value="John Doe" />
          <DetailRow label="Username" value="@johndoe" />
          <DetailRow label="Email" value="john@example.com" />
          <DetailRow label="Role" value="Administrator" />
          <DetailRow label="Joined On" value="March 12, 2023" />
          <DetailRow
            label="Bio"
            value="A passionate developer focused on building scalable web and mobile applications."
            multiline
          />
        </div>
      </CustomDetailsDialog>
    </>
  );
}
function DetailRow({ label, value, multiline = false }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="font-medium text-right col-span-1">{label}</div>
      <div
        className={`col-span-3 ${
          multiline ? "whitespace-pre-wrap" : "truncate"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
