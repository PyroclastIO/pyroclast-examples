# pyroclast examples

Example Pyroclast services.

## Running the examples

- Clone this repository.
- `cd` to the directory of the example you want to run.
- Validate the service file: `pyroclast validate --service <service-file>`
- Run the service: `pyroclast simulate --service <service-file> --records <event file>`

## The examples

Lsted in roughly ascending order of concept complexity:

- [built-in-transformations](built-in-transformations)
  - Streaming data pipeline using out-of-the-box transformation functions.
- [built-in-filters](built-in-filters)
  - Streaming data pipeline using out-of-the-box filter functions.
- [word-count](word-count)
  - Materializing the count over a stream of words.
- [grouped-average-aggregation](grouped-average-aggregation)
  - Materializes a global average using grouping keys.
- [fixed-window-aggregation](fixed-window-aggregation)
  - Materializes fixed window aggregations by the hour.
- [sliding-window-aggregation](sliding-window-aggregation)
  - Materializes sliding window aggregations by the hour, sliding by 10 minutes.
- [javascript-transformation](javascript-transformation)
  - Uses JavaScript for a custom transformation function.

## License

Copyright © 2017 Distributed Masonry

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.