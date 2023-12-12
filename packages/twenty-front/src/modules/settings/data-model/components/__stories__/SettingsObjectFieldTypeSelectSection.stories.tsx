import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import { ObjectMetadataItemsProvider } from '@/object-metadata/components/ObjectMetadataItemsProvider';
import { SnackBarProviderScope } from '@/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';
import {
  FieldMetadataType,
  RelationMetadataType,
} from '~/generated-metadata/graphql';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';
import {
  mockedCompaniesMetadata,
  mockedPeopleMetadata,
} from '~/testing/mock-data/metadata';

import { fieldMetadataFormDefaultValues } from '../../hooks/useFieldMetadataForm';
import {
  SettingsObjectFieldTypeSelectSection,
  SettingsObjectFieldTypeSelectSectionFormValues,
} from '../SettingsObjectFieldTypeSelectSection';

const fieldMetadata = mockedCompaniesMetadata.node.fields.edges.find(
  ({ node }) => node.type === FieldMetadataType.Text,
)!.node;
const { id: _id, ...fieldMetadataWithoutId } = fieldMetadata;

const meta: Meta<typeof SettingsObjectFieldTypeSelectSection> = {
  title: 'Modules/Settings/DataModel/SettingsObjectFieldTypeSelectSection',
  component: SettingsObjectFieldTypeSelectSection,
  decorators: [
    ComponentDecorator,
    (Story) => (
      <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
        <ObjectMetadataItemsProvider>
          <Story />
        </ObjectMetadataItemsProvider>
      </SnackBarProviderScope>
    ),
  ],
  args: {
    fieldMetadata: fieldMetadataWithoutId,
    objectMetadataId: mockedCompaniesMetadata.node.id,
    values: fieldMetadataFormDefaultValues,
  },
  parameters: {
    container: { width: 512 },
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof SettingsObjectFieldTypeSelectSection>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    fieldMetadata,
  },
};

export const WithOpenSelect: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = await canvas.findByText('Unique ID');
    await userEvent.click(input);

    const selectLabel = canvas.getByText('Number');

    await userEvent.click(selectLabel);
  },
};

const relationFieldMetadata = mockedPeopleMetadata.node.fields.edges.find(
  ({ node }) => node.type === FieldMetadataType.Relation,
)!.node;

export const WithRelationForm: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    fieldMetadata: mockedCompaniesMetadata.node.fields.edges.find(
      ({ node }) => node.type === FieldMetadataType.Relation,
    )?.node,
    relationFieldMetadata,
    values: {
      ...fieldMetadataFormDefaultValues,
      type: FieldMetadataType.Relation,
      relation: {
        field: relationFieldMetadata,
        objectMetadataId: mockedPeopleMetadata.node.id,
        type: RelationMetadataType.OneToMany,
      },
    } as unknown as SettingsObjectFieldTypeSelectSectionFormValues,
  },
};

export const WithSelectForm: Story = {
  args: {
    fieldMetadata: { label: 'Industry', icon: 'IconBuildingFactory2' },
    values: {
      ...fieldMetadataFormDefaultValues,
      type: FieldMetadataType.Select,
      select: [
        {
          color: 'pink',
          isDefault: true,
          label: '💊 Health',
          value: 'HEALTH',
        },
        {
          color: 'purple',
          label: '🏭 Industry',
          value: 'INDUSTRY',
        },
        { color: 'sky', label: '🤖 SaaS', value: 'SAAS' },
        {
          color: 'turquoise',
          label: '🌿 Green tech',
          value: 'GREEN_TECH',
        },
        {
          color: 'yellow',
          label: '🚲 Mobility',
          value: 'MOBILITY',
        },
        { color: 'green', label: '🌏 NGO', value: 'NGO' },
      ],
    },
  },
};
