// | Method / Property                 | Description                                        |
// | --------------------------------- | -------------------------------------------------- |
// | **`path.basename(path, [ext])`**  | Returns the file name part of a path               |
// | **`path.dirname(path)`**          | Returns the directory part of a path               |
// | **`path.extname(path)`**          | Returns the extension of a path                    |
// | **`path.format(pathObject)`**     | Formats an object into a full path                 |
// | **`path.parse(path)`**            | Returns an object with root, dir, base, ext, name  |
// | **`path.isAbsolute(path)`**       | Checks if a path is absolute                       |
// | **`path.join(...paths)`**         | Joins paths with proper separators                 |
// | **`path.normalize(path)`**        | Normalizes the path (e.g. resolves `..`, `.`)      |
// | **`path.relative(from, to)`**     | Gives relative path from one to another            |
// | **`path.resolve(...paths)`**      | Resolves into an absolute path                     |
// | **`path.toNamespacedPath(path)`** | Windows-specific namespace prefixing               |
// | **`path.posix`**                  | POSIX-specific version of `path` (always uses `/`) |
// | **`path.win32`**                  | Windows-specific version (always uses `\\`)        |
// | **`path.sep`**                    | Platform-specific separator (`/` or `\\`)          |
// | **`path.delimiter`**              | Platform-specific delimiter (`:` or `;`)           |

import { fileURLToPath } from 'url';
import path from 'path';

console.log(path.isAbsolute(path.join(fileURLToPath(import.meta.url))));
