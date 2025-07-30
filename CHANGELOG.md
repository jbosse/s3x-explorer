# Changelog

All notable changes to the S3/R2 Explorer extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-30

### Added

- **Core Features**

  - Tree view for browsing S3-compatible storage (buckets, folders, objects)
  - Support for Cloudflare R2, AWS S3, MinIO, and other S3-compatible services
  - Pagination with "Load more..." for large bucket listings
  - In-memory caching with TTL for improved performance

- **File Operations**

  - Direct editing of S3 objects in VS Code editors with s3x:// URI scheme
  - Auto-save functionality that syncs changes back to S3
  - Upload files and folders with drag-and-drop support
  - Download objects to local filesystem
  - Create new folders (S3 prefixes)
  - Delete objects and folders
  - File size and modification date display

- **Advanced Features**

  - Generate presigned URLs with customizable expiry times
  - Search objects by prefix (server-side) or content matching (client-side)
  - View detailed object metadata (size, content type, storage class, ETag, etc.)
  - Multipart upload support for large files (>100MB)
  - Progress tracking for all long-running operations

- **Security & Reliability**

  - Secure credential storage in VS Code settings
  - Automatic retry with exponential backoff for failed requests
  - Rate limiting compliance with S3 API limits
  - Path-style URL support (required for R2)
  - Input validation and error handling

- **User Experience**

  - Configuration wizard for easy setup
  - Context menus with relevant actions for each node type
  - Multi-select support for bulk operations
  - File type icons and metadata tooltips
  - Smoke test command for connection verification

- **R2-Specific Features**
  - Path-style addressing support (required for R2)
  - Custom endpoint configuration
  - R2-compatible SigV4 authentication
  - Tested with Cloudflare R2 jurisdictions (auto, eu)

### Technical Implementation

- **Architecture**

  - TypeScript codebase with strict type checking
  - Modular design with separate concerns (S3 client, tree provider, filesystem provider)
  - VS Code API integration (TreeDataProvider, FileSystemProvider, Commands)
  - AWS SDK v3 for reliable S3 operations

- **Performance**

  - Intelligent caching with cache invalidation
  - Lazy loading with pagination
  - Efficient multipart uploads for large files
  - Memory-optimized file handling

- **Developer Experience**
  - Comprehensive error messages with actionable suggestions
  - Debug logging and developer tools integration
  - Extensive inline documentation
  - Type-safe interfaces throughout

### Configuration

- `s3x.endpointUrl` - S3-compatible endpoint URL
- `s3x.accessKeyId` - Access Key ID
- `s3x.secretAccessKey` - Secret Access Key
- `s3x.region` - AWS region for SigV4 (default: us-east-1)
- `s3x.forcePathStyle` - Use path-style URLs (default: true, required for R2)
- `s3x.maxPreviewSizeBytes` - Maximum file size for direct editing (default: 10MB)

### Commands

- `s3x.refresh` - Refresh tree view
- `s3x.configure` - Open configuration wizard
- `s3x.createFolder` - Create new folder
- `s3x.uploadFile` - Upload file(s)
- `s3x.uploadFolder` - Upload folder
- `s3x.download` - Download object
- `s3x.rename` - Rename object/folder
- `s3x.delete` - Delete object/folder
- `s3x.copy` - Copy object
- `s3x.move` - Move object
- `s3x.presign` - Generate presigned URL
- `s3x.search` - Search objects in bucket
- `s3x.showMetadata` - Show object metadata
- `s3x.smokeTest` - Run connection and functionality test

### Known Limitations

- Folder upload is not yet fully implemented (planned for v1.1)
- Copy/move operations between buckets need UI improvements (planned for v1.1)
- Object versioning is not supported (planned for future release)
- Bulk operations are limited to 1000 objects at a time

### Compatibility

- **VS Code**: 1.74.0 or higher
- **Node.js**: 16.x or higher
- **S3 Services**:
  - ✅ Cloudflare R2 (all jurisdictions)
  - ✅ AWS S3 (all regions)
  - ✅ MinIO
  - ✅ Other S3-compatible services with path-style URL support

### Dependencies

- `@aws-sdk/client-s3`: ^3.454.0
- `@aws-sdk/s3-request-presigner`: ^3.454.0

## [Unreleased]

### Planned Features

- Recursive folder upload with progress tracking
- Enhanced copy/move operations with bucket selection
- Object versioning support
- Bucket lifecycle management
- Server-side encryption configuration
- CDN integration for R2
- Workspace-specific credential management
- Import/export of bucket configurations

### Bug Fixes

- None at this time

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Support

For issues, feature requests, or questions:

- 🐛 [Report bugs](https://github.com/your-org/s3x-explorer/issues)
- 💡 [Request features](https://github.com/your-org/s3x-explorer/discussions)
- 📖 [Read documentation](https://github.com/your-org/s3x-explorer/wiki)
