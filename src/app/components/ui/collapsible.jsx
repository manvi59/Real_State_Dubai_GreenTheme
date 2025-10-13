"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = (props) => (
  <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
);

const CollapsibleTrigger = (props) => (
  <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
);

const CollapsibleContent = (props) => (
  <CollapsiblePrimitive.Content data-slot="collapsible-content" {...props} />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
