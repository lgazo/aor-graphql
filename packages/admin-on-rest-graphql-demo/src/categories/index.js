import React from 'react';
import {
    translate,
    Datagrid,
    Edit,
    EditButton,
    List,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextField,
    TextInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/action/bookmark';

import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';
import LinkToRelatedProducts from './LinkToRelatedProducts';

export const CategoryIcon = Icon;

export const CategoryList = props => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid >
            <TextField source="name" style={{ padding: '0 12px 0 25px' }} />
            <LinkToRelatedProducts />
            <EditButton />
        </Datagrid>
    </List>
);

const CategoryTitle = translate(({ record, translate }) => <span>{translate('resources.Category.name', { smart_count: 1 })} "{record.name}"</span>);

export const CategoryEdit = props => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceManyField reference="Product" target="category.id" label="resources.Category.fields.products" perPage={5}>
                <Datagrid>
                    <ThumbnailField />
                    <ProductRefField source="reference" />
                    <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
                    <NumberField source="width" options={{ minimumFractionDigits: 2 }} />
                    <NumberField source="height" options={{ minimumFractionDigits: 2 }} />
                    <NumberField source="stock" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);
