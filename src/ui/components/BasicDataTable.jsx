import _ from "lodash";
import moment from "moment";
import DataTable from "react-data-table-component";

/**
 * @callback RowSelector
 * @param {object} row The object representing the table row.
 * @param {number} index The index of the object in the dataset i.e. the row in the table.
 */

/**
 * @param {string} name Title for the column header
 * @param {RowSelector} selector Value selector given the `row`
 * @param {boolean} sortable Specifies if this column is sortable.
 * @param {object} customize Additional customization based on https://react-data-table-component.netlify.app/
 * @returns {object}
 */
export function col(name, selector, sortable, customize = {}) {
  return {
    name,
    selector,
    sortable,
    ...customize,
  };
}

/**
 *
 * @param {string} path
 * @param {string} defaultValue
 * @returns {function}
 */
export function at(path, defaultValue) {
  return (ctx) => _.get(ctx, path, defaultValue);
}

/**
 *
 * @param {string} name Title for the column header
 * @param {string} path JSON path used to select the item from the `row`
 * @param {boolean} sortable Specifies if this column is sortable
 * @returns {object}
 */
export function basicCol(name, path, sortable) {
  return col(name, at(path), sortable);
}

/**
 *
 * @param {string} path JSON path used to select the item from the `row`. This is also used for the column header.
 * @param {boolean} sortable Specifies if this column is sortable
 * @returns {object}
 */
export function propCol(path, sortable = true) {
  return basicCol(
    _.chain(path.split(".")).last().upperFirst().value(),
    path,
    sortable
  );
}

/**
 * @param {string} name Title for the column header
 * @param {string} path JSON path used to select the item from the `row`
 * @returns {object}
 */
export function relativeDateCol(name, propertyPath) {
  return col(
    name,
    (row) => {
      const val = _.get(row, propertyPath);
      return moment(val).fromNow();
    },
    true,
    {
      sortFunction: (a, b) => {
        a = new Date(_.get(a, propertyPath)).getTime();
        b = new Date(_.get(b, propertyPath)).getTime();
        return a - b;
      },
    }
  );
}

const BasicDataTable = ({
  columns = [],
  data = [],
  loading,
  defaultSortField,
}) => {
  // TODO: expand
  // TODO: export
  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      defaultSortFieldId={defaultSortField}
    />
  );
};

export default BasicDataTable;
