"use client";

import { Zap } from "@untitledui/icons";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Button } from "@/components/base/buttons/button";

export const NavBar = () => (
  <HeaderNavigationBase
    showAvatarDropdown={false}
    hideBorder={true}
    items={[
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ]}
  />
);
