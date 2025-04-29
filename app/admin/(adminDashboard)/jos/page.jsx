{
  /* <Sidebar collapsible="icon" {...props}>
  <SidebarHeader className="text-white text-center mt-5">
    Araromi Cooperative
  </SidebarHeader>
  <SidebarContent className="bg-[#2e3847]">
    <SidebarMenu className="">
      {items.main.map((item) => (
        <SidebarMenuItem
          key={item.title}
          className={` p-[4px] ${
            route == item.url ? "bg-[#206bc4] text-white rounded" : ""
          }`}
        >
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon className="text-[13px] text-[#c1c4c8]" />
              <span className="text-[14px] text-[#c1c4c8]">{item.title}</span>
            </a>
          </SidebarMenuButton>
          
        </SidebarMenuItem>
      ))}
    </SidebarMenu>

    <SidebarMenu>
      {items.subItem.map((item) => (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={item.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && (
                  <item.icon className="text-[13px] text-[#c1c4c8]" />
                )}
                <span className="text-[14px] text-[#c1c4c8]">{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.item?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.url}>
                        <span className="text-[14px] text-[#c1c4c8]">
                          {subItem.title}
                        </span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  </SidebarContent>

  <SidebarRail />
</Sidebar>; */
}
