import type { ReactNode } from "react";

export type ReportTabKey =
  | "licenses"
  | "user-activity"
  | "test-results"
  | "leapwork-usage";

export interface SidebarMenuChildItem {
  text: string;
  to: string;
}

export interface SidebarMenuParentItem {
  text: string;
  children: SidebarMenuChildItem[];
}

export interface SidebarMenuLinkItem {
  text: string;
  to: string;
}

export type SidebarMenuItem = SidebarMenuParentItem | SidebarMenuLinkItem;

export interface KnowledgeResourceItem {
  text: string;
  description: string;
  icon: ReactNode;
}
