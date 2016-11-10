#!/bin/bash

if ! npm list --depth 1 --global galenframework-cli > /dev/null 2>&1; then
    echo "Installing galen"
    npm install -g galenframework-cli@2.3.1
fi

SPEC_FILTER="*"
if [ -n "$npm_config_filter" ]; then
    echo "filter is set to: $npm_config_filter"
    SPEC_FILTER="$npm_config_filter"
fi

echo "Running the tests for filter: $SPEC_FILTER"
galen test ./suites/ui_local.test \
--htmlreport "htmlreport-dir" \
--parallel-tests 4 \
--config "galen.config" \
--filter "$SPEC_FILTER"
