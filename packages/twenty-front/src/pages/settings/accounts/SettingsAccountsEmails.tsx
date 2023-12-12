import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { IconSettings } from '@/ui/display/icon';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Breadcrumb } from '@/ui/navigation/bread-crumb/components/Breadcrumb';

export const SettingsAccountsEmails = () => (
  <SubMenuTopBarContainer Icon={IconSettings} title="Settings">
    <SettingsPageContainer>
      <Breadcrumb
        links={[
          { children: 'Accounts', href: '/settings/accounts' },
          { children: 'Emails' },
        ]}
      />
    </SettingsPageContainer>
  </SubMenuTopBarContainer>
);
