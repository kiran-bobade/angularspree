import * as searchFiltersContainer from './search-filters-container';
import * as searchResultsContainer from './search-results-container';
import * as filterSummaryContainer from './filter-summary-container';

export const SEARCH_COMPONENTS = [
  ...searchFiltersContainer.COMPONENTS,
  ...searchResultsContainer.COMPONENTS,
  ...filterSummaryContainer.COMPONENTS
];
