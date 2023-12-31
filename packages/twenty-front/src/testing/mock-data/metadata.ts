import {
  FieldMetadataType,
  RelationMetadataType,
} from '~/generated-metadata/graphql';

export const mockedPeopleMetadata = {
  node: {
    __typename: 'object',
    id: '20202020-c64b-44bc-bd2c-502c99f49dca',
    nameSingular: 'person',
    namePlural: 'people',
    labelSingular: 'Person',
    labelPlural: 'People',
    description: 'A person',
    icon: 'IconUser',
    isCustom: false,
    isActive: true,
    isSystem: false,
    createdAt: '2023-11-24T03:29:18.207Z',
    updatedAt: '2023-11-24T03:29:18.207Z',
    fields: {
      edges: [
        {
          node: {
            __typename: 'field',
            id: '20202020-2bf4-42b8-8718-a3e852bfa6a6',
            type: 'DATE_TIME',
            name: 'updatedAt',
            label: 'Update date',
            description: null,
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-03cd-4cd0-9afc-92077b69f24f',
            type: 'UUID',
            name: 'id',
            label: 'Id',
            description: null,
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-486f-45f9-bbdf-aac18b1831c0',
            type: 'TEXT',
            name: 'phone',
            label: 'Phone',
            description: 'Contact’s phone number',
            icon: 'IconPhone',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-dcf6-445a-b543-37e55de43c25',
            type: 'LINK',
            name: 'linkedinLink',
            label: 'Linkedin',
            description: 'Contact’s Linkedin account',
            icon: 'IconBrandLinkedin',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-64e1-4080-b6ad-db03c3809f8b',
            type: 'UUID',
            name: 'companyId',
            label: 'Company ID (foreign key)',
            description: 'Foreign key for company',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-bb05-45cb-aa2a-71b58d49dd23',
            type: 'TEXT',
            name: 'avatarUrl',
            label: 'Avatar',
            description: 'Contact’s avatar',
            icon: 'IconFileUpload',
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-a3a7-4f63-9303-10226f6055be',
            type: 'LINK',
            name: 'xLink',
            label: 'X',
            description: 'Contact’s X/Twitter account',
            icon: 'IconBrandX',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-3b86-413e-ab56-0ebd1a583ff3',
            type: 'TEXT',
            name: 'jobTitle',
            label: 'Job Title',
            description: 'Contact’s job title',
            icon: 'IconBriefcase',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-8a96-4e4b-86fd-ea126530e0c1',
            type: 'EMAIL',
            name: 'email',
            label: 'Email',
            description: 'Contact’s Email',
            icon: 'IconMail',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-9b56-4888-bfe3-f6f59aa999e3',
            type: 'FULL_NAME',
            name: 'name',
            label: 'Name',
            description: 'Contact’s name',
            icon: 'IconUser',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-78f8-4b4c-90ff-86adf77590f5',
            type: 'TEXT',
            name: 'city',
            label: 'City',
            description: 'Contact’s city',
            icon: 'IconMap',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-bec0-4cf0-bf1c-8b2ed21f027a',
            type: 'DATE_TIME',
            name: 'createdAt',
            label: 'Creation date',
            description: null,
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.268Z',
            updatedAt: '2023-11-24T03:29:18.268Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: '531d5d57-1104-4ba9-b47b-6e526fc46cb6',
            type: FieldMetadataType.Relation,
            name: 'company',
            label: 'Company',
            description: '',
            placeholder: null,
            icon: 'IconBuildingSkyscraper',
            isCustom: false,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: {
              id: 'b53f8e8d-357c-4e75-8789-ecf95de200c9',
              relationType: RelationMetadataType.OneToMany,
              toObjectMetadata: {
                id: 'a3195559-cc20-4749-9565-572a2f506581',
                dataSourceId: '',
                nameSingular: 'company',
                namePlural: 'companies',
              },
              toFieldMetadataId: 'a578ffb2-13db-483c-ace7-5c30a13dff2d',
            },
          },
        },
      ],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
      totalCount: 12,
    },
  },
};

export const mockedCompaniesMetadata = {
  node: {
    id: 'a3195559-cc20-4749-9565-572a2f506581',
    dataSourceId: '',
    nameSingular: 'company',
    namePlural: 'companies',
    labelSingular: 'Company',
    labelPlural: 'Companies',
    description: null,
    icon: 'IconBuildingSkyscraper',
    isCustom: false,
    isActive: true,
    createdAt: '',
    updatedAt: '',
    fields: {
      edges: [
        {
          node: {
            id: '397eabc0-c5a1-4550-8e68-839c878a8d0e',
            type: FieldMetadataType.Text,
            name: 'name',
            label: 'Name',
            description: 'The company name.',
            placeholder: null,
            icon: 'IconBuildingSkyscraper',
            isCustom: false,
            isActive: true,
            isNullable: false,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: '7ad234c7-f3b9-4efc-813c-43dc97070b07',
            type: FieldMetadataType.Link,
            name: 'URL',
            label: 'URL',
            description:
              'The company website URL. We use this url to fetch the company icon.',
            placeholder: null,
            icon: 'IconLink',
            isCustom: false,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: 'a578ffb2-13db-483c-ace7-5c30a13dff2d',
            type: FieldMetadataType.Relation,
            name: 'people',
            label: 'People',
            description: 'People linked to the company.',
            placeholder: null,
            icon: 'IconUsers',
            isCustom: false,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: {
              id: '91f07688-2243-43a4-91b4-e2984669fe8e',
              relationType: RelationMetadataType.OneToMany,
              toObjectMetadata: {
                id: mockedPeopleMetadata.node.id,
                nameSingular: mockedPeopleMetadata.node.nameSingular,
                namePlural: mockedPeopleMetadata.node.namePlural,
              },
              toFieldMetadataId: '531d5d57-1104-4ba9-b47b-6e526fc46cb6',
            },
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: 'b7fd622d-7d8b-4f5a-b148-a7e9fd2c4660',
            type: FieldMetadataType.Number,
            name: 'employees',
            label: 'Employees',
            description: 'Number of employees in the company.',
            placeholder: null,
            icon: 'IconUsers',
            isCustom: true,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: '60ab27ed-a959-471e-b583-887387f7accd',
            type: FieldMetadataType.Link,
            name: 'linkedinUrl',
            label: 'Linkedin URL',
            description: null,
            placeholder: null,
            icon: 'IconBrandLinkedin',
            isCustom: false,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: '6daadb98-83ca-4c85-bca5-7792a7d958ad',
            type: FieldMetadataType.Boolean,
            name: 'idealCustomerProfile',
            label: 'ICP',
            description: '',
            placeholder: null,
            icon: 'IconTarget',
            isCustom: true,
            isActive: false,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: 'd9e366d5-d43d-4f71-ac97-f1d32768f79b',
            type: FieldMetadataType.Currency,
            name: 'annualRecurringRevenue',
            label: 'ARR',
            description: '',
            placeholder: null,
            icon: 'IconMoneybag',
            isCustom: false,
            isActive: true,
            isNullable: false,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            id: '39c55b95-f8cf-49a3-9713-fc52bbd117ae',
            type: FieldMetadataType.DateTime,
            name: 'createdAt',
            label: 'Created At',
            description: '',
            placeholder: null,
            icon: 'IconCalendar',
            isCustom: false,
            isActive: false,
            isNullable: false,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
      ],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
      totalCount: 8,
    },
  },
};

export const mockedWorkspacesMetadata = {
  node: {
    id: 'c973efa3-436e-47ea-8dbc-983ed869c04d',
    dataSourceId: '',
    nameSingular: 'workspace',
    namePlural: 'workspaces',
    labelSingular: 'Workspace',
    labelPlural: 'Workspaces',
    description: null,
    icon: 'IconApps',
    isCustom: true,
    isActive: true,
    createdAt: '',
    updatedAt: '',
    fields: {
      edges: [
        {
          node: {
            id: 'f955402c-9e8f-4b91-a82c-95f6de392b99',
            type: 'TEXT',
            name: 'slug',
            label: 'Slug',
            description: null,
            placeholder: null,
            icon: 'IconSlash',
            isCustom: true,
            isActive: true,
            isNullable: true,
            createdAt: '',
            updatedAt: '',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
      ],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
      totalCount: 1,
    },
  },
};

export const mockedActivitiesMetadata = {
  node: {
    __typename: 'object',
    id: '20202020-8ee3-4f67-84ab-1b7a6eb5a448',
    nameSingular: 'activity',
    namePlural: 'activities',
    labelSingular: 'Activity',
    labelPlural: 'Activities',
    description: 'An activity',
    icon: 'IconCheckbox',
    isCustom: false,
    isActive: true,
    isSystem: true,
    createdAt: '2023-11-24T03:29:18.207Z',
    updatedAt: '2023-11-24T03:29:18.207Z',
    fields: {
      edges: [
        {
          node: {
            __typename: 'field',
            id: '20202020-4694-4ec6-9084-8d932ebb3066',
            type: 'UUID',
            name: 'assigneeId',
            label: 'Assignee id (foreign key)',
            description: 'Acitivity assignee id foreign key',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-88df-4202-bf82-6a06c6963280',
            type: 'DATE_TIME',
            name: 'updatedAt',
            label: 'Update date',
            description: null,
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-aff0-4961-be8a-0e5c2598b9a6',
            type: 'TEXT',
            name: 'body',
            label: 'Body',
            description: 'Activity body',
            icon: 'IconList',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-cd46-44f4-bf22-b0aa20d009da',
            type: 'DATE_TIME',
            name: 'reminderAt',
            label: 'Reminder Date',
            description: 'Activity reminder date',
            icon: 'IconCalendarEvent',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-2584-4797-95a8-5cc90d48c040',
            type: 'TEXT',
            name: 'title',
            label: 'Title',
            description: 'Activity title',
            icon: 'IconNotes',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-f695-419c-b928-c488323d6df3',
            type: 'UUID',
            name: 'id',
            label: 'Id',
            description: null,
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-3acb-46bb-b993-0dc49fa2a48d',
            type: 'UUID',
            name: 'authorId',
            label: 'Author id (foreign key)',
            description: 'Activity author id foreign key',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-0924-48f0-a8c2-d2dd4e2098e2',
            type: 'DATE_TIME',
            name: 'completedAt',
            label: 'Completion Date',
            description: 'Activity completion date',
            icon: 'IconCheck',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-a243-4b94-a4b4-25705af86be2',
            type: 'TEXT',
            name: 'type',
            label: 'Type',
            description: 'Activity type',
            icon: 'IconCheckbox',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-65a2-4d9c-b640-bac54007a14d',
            type: 'DATE_TIME',
            name: 'createdAt',
            label: 'Creation date',
            description: null,
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: true,
            isNullable: false,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          node: {
            __typename: 'field',
            id: '20202020-20e1-4366-b386-750bdca2dfe3',
            type: 'DATE_TIME',
            name: 'dueAt',
            label: 'Due Date',
            description: 'Activity due date',
            icon: 'IconCalendarEvent',
            isCustom: false,
            isActive: true,
            isSystem: false,
            isNullable: true,
            createdAt: '2023-11-24T03:29:18.228Z',
            updatedAt: '2023-11-24T03:29:18.228Z',
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
      ],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
      totalCount: 11,
    },
  },
};

export const mockedObjectMetadataItems = {
  edges: [
    {
      node: {
        id: 'b25eb5e6-9fdc-4df2-a039-40ccea4c8032',
        dataSourceId: '',
        nameSingular: 'view',
        namePlural: 'views',
        labelSingular: 'View',
        labelPlural: 'Views',
        description: '(System) Views',
        icon: 'IconLayoutCollage',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '5db475e7-8208-402d-97a1-62c9ce344dd4',
                type: 'TEXT',
                name: 'objectMetadataId',
                label: 'Object Metadata Id',
                description: 'View target object',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: 'ddc89a56-9add-4110-aa53-4ecdbba36767',
                type: 'TEXT',
                name: 'type',
                label: 'Type',
                description: 'View type',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: '35fa806b-5d9d-446d-bd0e-1a6874b871ee',
                type: 'TEXT',
                name: 'name',
                label: 'Name',
                description: 'View name',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 3,
        },
      },
    },
    {
      node: {
        id: 'c419540f-ff6e-47bf-9d87-3aa366afd8e4',
        dataSourceId: '',
        nameSingular: 'viewField',
        namePlural: 'viewFields',
        labelSingular: 'View Field',
        labelPlural: 'View Fields',
        description: '(System) View Fields',
        icon: 'IconColumns3',
        isCustom: false,
        isActive: true,
        createdAt: '',
        updatedAt: '',
        fields: {
          edges: [
            {
              node: {
                id: '1d718fcf-5a17-4694-91a4-4d3968a51aa4',
                type: 'TEXT',
                name: 'viewId',
                label: 'View Id',
                description: 'View Field related view',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: '8ead2e86-7b60-4a47-9b4f-ad008e744d52',
                type: 'NUMBER',
                name: 'position',
                label: 'Position',
                description: 'View Field position',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: '4d77c2dd-2b04-4989-b11e-cb0e386d1b4d',
                type: 'TEXT',
                name: 'fieldMetadataId',
                label: 'Field Metadata Id',
                description: 'View Field target field',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: '0f5ab566-9fc4-44b7-85c5-1e05db9f6b49',
                type: 'BOOLEAN',
                name: 'isVisible',
                label: 'Visible',
                description: 'View Field visibility',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
            {
              node: {
                id: '21268ece-7002-4b04-a442-f25278f8ca13',
                type: 'NUMBER',
                name: 'size',
                label: 'Size',
                description: 'View Field size',
                icon: null,
                placeholder: null,
                isCustom: false,
                isActive: true,
                isNullable: false,
                createdAt: '',
                updatedAt: '',
                fromRelationMetadata: null,
                toRelationMetadata: null,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: null,
            endCursor: null,
          },
          totalCount: 5,
        },
      },
    },
    mockedPeopleMetadata,
    mockedCompaniesMetadata,
    mockedWorkspacesMetadata,
    mockedPeopleMetadata,
    mockedActivitiesMetadata,
  ],
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
    endCursor: null,
  },
  totalCount: 6,
};
