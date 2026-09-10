/**
 * Chawla Studio — Pure HTML/CSS/JS Application
 *
 * Self-contained vanilla JS replacing the React/Next.js build.
 * Covers: cinematic loader, navigation, gallery with filters,
 * photography lightbox, video modal, enquiry form, smooth scroll,
 * scroll-linked effects, and lazy-loading.
 */

// ─── Photo Data (from photos.generated.ts) ───────────────────────────────────
const PHOTOS = {
  "0f5a4569": { id: "0f5a4569", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4569-1200.jpg", srcSet: "/photos/0f5a4569-480.webp 480w, /photos/0f5a4569-800.webp 800w, /photos/0f5a4569-1200.webp 1200w, /photos/0f5a4569-1800.webp 1800w, /photos/0f5a4569-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACQAwCdASoUAA0APwlwr1ArpiQisAgBcCEJZACdMoABztCc6EgwAPko6oKtF0eueAkmrkxIZiUWNoNdBjI74kmgfjpkgpx6+SjV5ZM9gsWIW0btIKTGclrIAAA=", source: "Photos/Ring Ceremony/0F5A4569.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "70mm", aperture: "f/5", shutter: "1/160", iso: 1250 } },
  "0f5a4579": { id: "0f5a4579", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a4579-1200.jpg", srcSet: "/photos/0f5a4579-480.webp 480w, /photos/0f5a4579-800.webp 800w, /photos/0f5a4579-1200.webp 1200w, /photos/0f5a4579-1800.webp 1800w, /photos/0f5a4579-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAAAQBQCdASoUAB4APwl4s1MrpySiqAqpcCEJZAC1GoABrXLHfHBHsGP9g7FqRNyE/OgAAPJy/x2to1HJpcp4qy5v8frL8Am25F+zEr7N28onq7CdQlQ8iN3ogAujeWTNIEL+bm4ycdvMPQVmhRo0S5og1wkeComXIl74Fxi8J5QUyAPZ8W/LnCJEHvwA2ZSAHM19cAAA", source: "Photos/Ring Ceremony/0F5A4579.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "39mm", aperture: "f/4.5", shutter: "1/160", iso: 1600 } },
  "0f5a4584": { id: "0f5a4584", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4584-1200.jpg", srcSet: "/photos/0f5a4584-480.webp 480w, /photos/0f5a4584-800.webp 800w, /photos/0f5a4584-1200.webp 1200w, /photos/0f5a4584-1800.webp 1800w, /photos/0f5a4584-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQBACdASoUAA0APwlurk+rpiQiMAgBcCEJbAC06B9flijKl8L4Vv6HAADd/lv4SAPbyO/MeNczAxkaScjCDeJh+DLbLHGGCVCqa0DzVY2y+Pj00+kuWH0iaQMAAA==", source: "Photos/Ring Ceremony/0F5A4584.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "38mm", aperture: "f/5", shutter: "1/160", iso: 1600 } },
  "0f5a4587": { id: "0f5a4587", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4587-1200.jpg", srcSet: "/photos/0f5a4587-480.webp 480w, /photos/0f5a4587-800.webp 800w, /photos/0f5a4587-1200.webp 1200w, /photos/0f5a4587-1800.webp 1800w, /photos/0f5a4587-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoUAA0APwl6t1ArpyQisSoMECEJSgC0gCGgAD+xTcNfuqhLMBiYhFmCJHiMWqnAMOjPPVhfkfOOoWuRvxOFMCqiJbWkGMjnkPkJhPfzWOuqCBmOzXSKJvJNBrJkBqGxPrHRzGCPpRjGiZGWkAA=", source: "Photos/Ring Ceremony/0F5A4587.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "70mm", aperture: "f/5", shutter: "1/160", iso: 1600 } },
  "0f5a4594": { id: "0f5a4594", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4594-1200.jpg", srcSet: "/photos/0f5a4594-480.webp 480w, /photos/0f5a4594-800.webp 800w, /photos/0f5a4594-1200.webp 1200w, /photos/0f5a4594-1800.webp 1800w, /photos/0f5a4594-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAACwAwCdASoUAA0APwl6p1ArpyQiMAkQACEJagCiAJ0B0cKHuAD++RdaV+Gzrz1cOIi7+sBTVFOjpyJuPzH5lkWVAkdUTiXHYjTzIuFzrTrGWCPOlzFkdaE08ggKKfmTMXnGBqAA=", source: "Photos/Ring Ceremony/0F5A4594.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "70mm", aperture: "f/5", shutter: "1/200", iso: 1600 } },
  "0f5a4601": { id: "0f5a4601", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4601-1200.jpg", srcSet: "/photos/0f5a4601-480.webp 480w, /photos/0f5a4601-800.webp 800w, /photos/0f5a4601-1200.webp 1200w, /photos/0f5a4601-1800.webp 1800w, /photos/0f5a4601-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAACwAwCdASoUAA0APwlys1MrpyQiMAgBcCEJZAC7ACiSxNjQAP75FYcYzqLGCBGKPjzSMJHZBhOKAJnRuqiJOKrMiB9nHFpNJqDpzZNGxOtjhGiIpxMzXMfNfxMEAA==", source: "Photos/Ring Ceremony/0F5A4601.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "24mm", aperture: "f/5", shutter: "1/250", iso: 1600 } },
  "0f5a4616": { id: "0f5a4616", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a4616-1200.jpg", srcSet: "/photos/0f5a4616-480.webp 480w, /photos/0f5a4616-800.webp 800w, /photos/0f5a4616-1200.webp 1200w, /photos/0f5a4616-1800.webp 1800w, /photos/0f5a4616-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAQBQCdASoUAA0APwlsrFGrqiaisAgBcCEJZACrwAWMDhzCRQAA/cSHRBqfxGjRhHzBfIqmKCbhiPqNmxOZlVCjIBQjfbxqkFHrS9fFpAEuGmFzSNfLDlqTSfUqpvSIVrGiuuPCTBuF2VNnTRVGUUBCELXqwVFpLbEFhAAA", source: "Photos/Ring Ceremony/0F5A4616.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "24mm", aperture: "f/5", shutter: "1/160", iso: 1600 } },
  "0f5a4684": { id: "0f5a4684", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a4684-1200.jpg", srcSet: "/photos/0f5a4684-480.webp 480w, /photos/0f5a4684-800.webp 800w, /photos/0f5a4684-1200.webp 1200w, /photos/0f5a4684-1800.webp 1800w, /photos/0f5a4684-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAAAwBgCdASoUAB4APwl8sFGrpiQiMAgBcCEJZgCiAGQAAD+7KBGZ2LULdFWEjbJHqHLMiD7JQHC27cXGDxWLXGjBqFvYfNnrJEJhzgqTrqZXGGvUKNFRMSNEGqxjNkzOWCVzXzQJFpuHOJhJFhGCKNOCBrNSJHpCCuiAA==", source: "Photos/Ring Ceremony/0F5A4684.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "45mm", aperture: "f/5", shutter: "1/160", iso: 3200 } },
  "0f5a5046": { id: "0f5a5046", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a5046-1200.jpg", srcSet: "/photos/0f5a5046-480.webp 480w, /photos/0f5a5046-800.webp 800w, /photos/0f5a5046-1200.webp 1200w, /photos/0f5a5046-1800.webp 1800w, /photos/0f5a5046-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADwBACdASoUAB4APwl4sFCrpyQiMAgBcCEJYQC3AB0AAP7ynuYuEfwlFXmVkEuuMBvWfqNGnWOhbBhFdJYSfNvDMVDmzWGQqXBbqvSGLHOBTDGRjmAcQHOiuqFkFkKMJfGMHOGHVOlwlEqxFAAAA==", source: "Photos/Ring Ceremony/0F5A5046.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "32mm", aperture: "f/5", shutter: "1/160", iso: 1600 } },
  "0f5a5048": { id: "0f5a5048", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a5048-1200.jpg", srcSet: "/photos/0f5a5048-480.webp 480w, /photos/0f5a5048-800.webp 800w, /photos/0f5a5048-1200.webp 1200w, /photos/0f5a5048-1800.webp 1800w, /photos/0f5a5048-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAgCdASoUAA0APwle0m+rpe8joHABcCEJbACs0ARBAAD+/JYoZOlSADOFWGxKhHEhJLMDYFLWrHQqjvRCOdSCEDhOYOWxYEhJOhqbvAAAA==", source: "Photos/Ring Ceremony/0F5A5048.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "32mm", aperture: "f/5", shutter: "1/160", iso: 1250 } },
  "0f5a5061": { id: "0f5a5061", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a5061-1200.jpg", srcSet: "/photos/0f5a5061-480.webp 480w, /photos/0f5a5061-800.webp 800w, /photos/0f5a5061-1200.webp 1200w, /photos/0f5a5061-1800.webp 1800w, /photos/0f5a5061-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAABwBQCdASoUAA0APwlmpFIrpiQiMAgBcCEJZACvgGQCQAD+7KxbTWHkFmWFbIvRBTvFhvfGlzBBmvMSMPiJ+3Pox2kLJqMFnXXWJCYHJVWWxGNIRFWEpUlrFmhpQlcSYuHxFhEAAAAA", source: "Photos/Ring Ceremony/0F5A5061.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "24mm", aperture: "f/5", shutter: "1/160", iso: 1250 } },
  "0f5a5062": { id: "0f5a5062", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a5062-1200.jpg", srcSet: "/photos/0f5a5062-480.webp 480w, /photos/0f5a5062-800.webp 800w, /photos/0f5a5062-1200.webp 1200w, /photos/0f5a5062-1800.webp 1800w, /photos/0f5a5062-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADwBACdASoUAB4APwl4sFCrpiQiMAgBcCEJYgC2gAAAAP7yluiUNlGEVYfGrTbTfhgSQSfvIvqQqmWJTdKQAqAWDUcPBVRYzpMxUkiZJQqBuXYuiAGJxOGOiLhqxKfuJALgCFAAAAA==", source: "Photos/Ring Ceremony/0F5A5062.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "35mm", aperture: "f/5", shutter: "1/160", iso: 1600 } },
  "0f5a5067": { id: "0f5a5067", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a5067-1200.jpg", srcSet: "/photos/0f5a5067-480.webp 480w, /photos/0f5a5067-800.webp 800w, /photos/0f5a5067-1200.webp 1200w, /photos/0f5a5067-1800.webp 1800w, /photos/0f5a5067-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAwCdASoUAA0APwlurk+rpiqiMAgBcCEJbABuWAKUQAD+8UVpJMoQOhUJnFAXCFDTFmLvkCHjrxFYXDRpFzBOdVBYLNXlOhCVhqGCrUAA=", source: "Photos/Ring Ceremony/0F5A5067.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "40mm", aperture: "f/5", shutter: "1/160", iso: 2000 } },
  "0f5a6488": { id: "0f5a6488", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6488-1200.jpg", srcSet: "/photos/0f5a6488-480.webp 480w, /photos/0f5a6488-800.webp 800w, /photos/0f5a6488-1200.webp 1200w, /photos/0f5a6488-1800.webp 1800w, /photos/0f5a6488-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBQCdASoUAA0APwl4s1CrpyQiMAgBcCEJZQCiALsD4AAA/veGJhFXqCBvhAJCQFmBJFBLvnZQEjhDWlcCVxOqNdVOLPWjHjHQRGGSCYqxrZxCPLWDvmNRIgWZBCXPfbVCOGJfRmYbPJSKMYFHzSBhMNOJCBqwDAAAAA==", source: "Photos/Wedding/0F5A6488.jpg", capture: { year: null, date: null, camera: "Canon EOS 5D Mark III", lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6489": { id: "0f5a6489", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6489-1200.jpg", srcSet: "/photos/0f5a6489-480.webp 480w, /photos/0f5a6489-800.webp 800w, /photos/0f5a6489-1200.webp 1200w, /photos/0f5a6489-1800.webp 1800w, /photos/0f5a6489-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwBACdASoUAA0APwl2s1CrpisioFABcCEJYgC2gAAAAP7ynVBFBpOkCvuXMVxfVFzwrWHdQNQKpLrqzBrXWJAA", source: "Photos/Wedding/0F5A6489.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6491": { id: "0f5a6491", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6491-1200.jpg", srcSet: "/photos/0f5a6491-480.webp 480w, /photos/0f5a6491-800.webp 800w, /photos/0f5a6491-1200.webp 1200w, /photos/0f5a6491-1800.webp 1800w, /photos/0f5a6491-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwAwCdASoUAA0APwlyr1CrpisioFABcCEJYwC7AAAAAACdAD+/Sn0Mfyxs/1gMxSAA", source: "Photos/Wedding/0F5A6491.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6494": { id: "0f5a6494", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6494-1200.jpg", srcSet: "/photos/0f5a6494-480.webp 480w, /photos/0f5a6494-800.webp 800w, /photos/0f5a6494-1200.webp 1200w, /photos/0f5a6494-1800.webp 1800w, /photos/0f5a6494-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoUAA0APwlwr1CreioisA4BcCEJbACz4ABCjgAA", source: "Photos/Wedding/0F5A6494.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6503": { id: "0f5a6503", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6503-1200.jpg", srcSet: "/photos/0f5a6503-480.webp 480w, /photos/0f5a6503-800.webp 800w, /photos/0f5a6503-1200.webp 1200w, /photos/0f5a6503-1800.webp 1800w, /photos/0f5a6503-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACwAwCdASoUAA0APwlmrFGrpiQiMAgBcCEJZQCoqoAAAPtjMvJJqHXJBEGPGrHuqHhGMFJFjhfIFvVNOgkzFCZGRKpLMAAAAA==", source: "Photos/Wedding/0F5A6503.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6506": { id: "0f5a6506", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6506-1200.jpg", srcSet: "/photos/0f5a6506-480.webp 480w, /photos/0f5a6506-800.webp 800w, /photos/0f5a6506-1200.webp 1200w, /photos/0f5a6506-1800.webp 1800w, /photos/0f5a6506-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADgAwCdASoUAA0APwlir1CrpiQiMCkBcCEJawCbAAFAAP79BhzDfMCpCKvvJqJMjnUAAAA=", source: "Photos/Wedding/0F5A6506.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6528": { id: "0f5a6528", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6528-1200.jpg", srcSet: "/photos/0f5a6528-480.webp 480w, /photos/0f5a6528-800.webp 800w, /photos/0f5a6528-1200.webp 1200w, /photos/0f5a6528-1800.webp 1800w, /photos/0f5a6528-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAAAwAwCdASoUAA0APwlur1CrpisioFABcCEJbABuWAAAAP7yAA2SAAAA", source: "Photos/Wedding/0F5A6528.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6531": { id: "0f5a6531", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6531-1200.jpg", srcSet: "/photos/0f5a6531-480.webp 480w, /photos/0f5a6531-800.webp 800w, /photos/0f5a6531-1200.webp 1200w, /photos/0f5a6531-1800.webp 1800w, /photos/0f5a6531-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBQCdASoUAB4APwl4sFCrpiQiMAgBcCEJXQCiAAFAAP7ylvlnxLjuCXJALKiJVbHrxTRBnwQNVlCbTRqJGMHNJoAAA==", source: "Photos/Wedding/0F5A6531.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6536": { id: "0f5a6536", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6536-1200.jpg", srcSet: "/photos/0f5a6536-480.webp 480w, /photos/0f5a6536-800.webp 800w, /photos/0f5a6536-1200.webp 1200w, /photos/0f5a6536-1800.webp 1800w, /photos/0f5a6536-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAwBQCdASoUAB4APwl4s1CrpiQiMAgBcCEJXgCiAAAAAACdAD++SoBMoJJGnPBRXLOFUXhKEHBqkGUKzZqDXxBjBBVGjxTKWDUcIXhJHzZRhBGKVMBAAAA==", source: "Photos/Wedding/0F5A6536.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6545": { id: "0f5a6545", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6545-1200.jpg", srcSet: "/photos/0f5a6545-480.webp 480w, /photos/0f5a6545-800.webp 800w, /photos/0f5a6545-1200.webp 1200w, /photos/0f5a6545-1800.webp 1800w, /photos/0f5a6545-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAADwAwCdASoUAB4APwl4s1GrpiQiMAgBcCEJbACiAAAAAP7ylvlnxLjuCXJALJjpBpWDUFYXhJHzZRgAAAA==", source: "Photos/Wedding/0F5A6545.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6604": { id: "0f5a6604", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a6604-1200.jpg", srcSet: "/photos/0f5a6604-480.webp 480w, /photos/0f5a6604-800.webp 800w, /photos/0f5a6604-1200.webp 1200w, /photos/0f5a6604-1800.webp 1800w, /photos/0f5a6604-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABwAwCdASoUAA0APwlirVCrpissjoFABcCEJYQC0gAAAAD+8Vj3bJAAAAA=", source: "Photos/Ring Ceremony/0F5A6604.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "24mm", aperture: "f/5", shutter: "1/160", iso: 3200 } },
  "0f5a6631": { id: "0f5a6631", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6631-1200.jpg", srcSet: "/photos/0f5a6631-480.webp 480w, /photos/0f5a6631-800.webp 800w, /photos/0f5a6631-1200.webp 1200w, /photos/0f5a6631-1800.webp 1800w, /photos/0f5a6631-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAQBgCdASoUAB4APwl6t1AqpbaisAgBcCEJZQCiAAUABQAA/vuqJEhPjvCXJALJiRXhGzZTKRRCFBYGQMVQAAAA==", source: "Photos/Wedding/0F5A6631.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6744": { id: "0f5a6744", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6744-1200.jpg", srcSet: "/photos/0f5a6744-480.webp 480w, /photos/0f5a6744-800.webp 800w, /photos/0f5a6744-1200.webp 1200w, /photos/0f5a6744-1800.webp 1800w, /photos/0f5a6744-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwl4s1CrpiQiMAgBcCEJXQCiAAAA", source: "Photos/Ring Ceremony/0F5A6744.jpg", capture: { year: 2024, date: "2024-03-09", camera: "Canon EOS 5D Mark III", lens: "EF24-70mm f/4L IS USM", focal: "70mm", aperture: "f/5", shutter: "1/125", iso: 3200 } },
  "0f5a9678": { id: "0f5a9678", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a9678-1200.jpg", srcSet: "/photos/0f5a9678-480.webp 480w, /photos/0f5a9678-800.webp 800w, /photos/0f5a9678-1200.webp 1200w, /photos/0f5a9678-1800.webp 1800w, /photos/0f5a9678-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAABwBACdASoUAB4APwl4sFGrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9678.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9697": { id: "0f5a9697", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a9697-1200.jpg", srcSet: "/photos/0f5a9697-480.webp 480w, /photos/0f5a9697-800.webp 800w, /photos/0f5a9697-1200.webp 1200w, /photos/0f5a9697-1800.webp 1800w, /photos/0f5a9697-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAA0APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9697.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9856": { id: "0f5a9856", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a9856-1200.jpg", srcSet: "/photos/0f5a9856-480.webp 480w, /photos/0f5a9856-800.webp 800w, /photos/0f5a9856-1200.webp 1200w, /photos/0f5a9856-1800.webp 1800w, /photos/0f5a9856-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAA0APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9856.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9946": { id: "0f5a9946", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a9946-1200.jpg", srcSet: "/photos/0f5a9946-480.webp 480w, /photos/0f5a9946-800.webp 800w, /photos/0f5a9946-1200.webp 1200w, /photos/0f5a9946-1800.webp 1800w, /photos/0f5a9946-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAA0APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9946.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9959": { id: "0f5a9959", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a9959-1200.jpg", srcSet: "/photos/0f5a9959-480.webp 480w, /photos/0f5a9959-800.webp 800w, /photos/0f5a9959-1200.webp 1200w, /photos/0f5a9959-1800.webp 1800w, /photos/0f5a9959-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9959.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9962": { id: "0f5a9962", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a9962-1200.jpg", srcSet: "/photos/0f5a9962-480.webp 480w, /photos/0f5a9962-800.webp 800w, /photos/0f5a9962-1200.webp 1200w, /photos/0f5a9962-1800.webp 1800w, /photos/0f5a9962-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9962.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9983": { id: "0f5a9983", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a9983-1200.jpg", srcSet: "/photos/0f5a9983-480.webp 480w, /photos/0f5a9983-800.webp 800w, /photos/0f5a9983-1200.webp 1200w, /photos/0f5a9983-1800.webp 1800w, /photos/0f5a9983-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAA0APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9983.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a9991": { id: "0f5a9991", width: 5760, height: 3840, aspectRatio: 1.5, src: "/photos/0f5a9991-1200.jpg", srcSet: "/photos/0f5a9991-480.webp 480w, /photos/0f5a9991-800.webp 800w, /photos/0f5a9991-1200.webp 1200w, /photos/0f5a9991-1800.webp 1800w, /photos/0f5a9991-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAA0APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A9991.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6305": { id: "0f5a6305", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6305-1200.jpg", srcSet: "/photos/0f5a6305-480.webp 480w, /photos/0f5a6305-800.webp 800w, /photos/0f5a6305-1200.webp 1200w, /photos/0f5a6305-1800.webp 1800w, /photos/0f5a6305-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A6305.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6324": { id: "0f5a6324", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6324-1200.jpg", srcSet: "/photos/0f5a6324-480.webp 480w, /photos/0f5a6324-800.webp 800w, /photos/0f5a6324-1200.webp 1200w, /photos/0f5a6324-1800.webp 1800w, /photos/0f5a6324-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A6324.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6329": { id: "0f5a6329", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6329-1200.jpg", srcSet: "/photos/0f5a6329-480.webp 480w, /photos/0f5a6329-800.webp 800w, /photos/0f5a6329-1200.webp 1200w, /photos/0f5a6329-1800.webp 1800w, /photos/0f5a6329-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A6329.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6360": { id: "0f5a6360", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6360-1200.jpg", srcSet: "/photos/0f5a6360-480.webp 480w, /photos/0f5a6360-800.webp 800w, /photos/0f5a6360-1200.webp 1200w, /photos/0f5a6360-1800.webp 1800w, /photos/0f5a6360-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A6360.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
  "0f5a6366": { id: "0f5a6366", width: 3840, height: 5760, aspectRatio: 0.666667, src: "/photos/0f5a6366-1200.jpg", srcSet: "/photos/0f5a6366-480.webp 480w, /photos/0f5a6366-800.webp 800w, /photos/0f5a6366-1200.webp 1200w, /photos/0f5a6366-1800.webp 1800w, /photos/0f5a6366-2400.webp 2400w", blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwBQCdASoUAB4APwlmrFCrpiQiMAgBcCEJYwCiAAAA", source: "Photos/Wedding/0F5A6366.jpg", capture: { year: null, date: null, camera: null, lens: null, focal: null, aperture: null, shutter: null, iso: null } },
};

// ─── Alt text mapping ─────────────────────────────────────────────────────────
const CAPTIONS = {
  '0f5a4569': { alt: 'Two gold rings resting in shallow dishes of red kumkum on a brass tray, foliage behind.', note: 'Before anyone is called in.' },
  '0f5a4579': { alt: 'A couple hold a ring between them, hands together at the centre of the frame.' },
  '0f5a4584': { alt: 'A couple laugh together in front of a wall of pink and cream flowers.' },
  '0f5a4587': { alt: 'He slides a ring onto her finger; both are looking down at her hand.', note: 'The only part of the evening nobody rehearses.' },
  '0f5a4594': { alt: 'A plume of white smoke crosses the frame beside the couple as petals fall.' },
  '0f5a4601': { alt: 'He dips her back and her embroidered lehenga sweeps across the floor.' },
  '0f5a4616': { alt: 'The couple hold a small bouquet between them, guests just out of frame.' },
  '0f5a4684': { alt: 'A woman in a pale pink gown mid-turn on the dance floor, hair flying.' },
  '0f5a5046': { alt: 'The couple stand forehead to forehead in a marble lobby lit warm gold.' },
  '0f5a5048': { alt: 'Her embroidered train fans out behind her across polished marble.' },
  '0f5a5061': { alt: 'The couple stand together in a hotel lobby of gold and grey marble.' },
  '0f5a5062': { alt: 'Two hands covered in fresh henna, glass bangles stacked at the wrist.', note: 'Henna, still drying.' },
  '0f5a5067': { alt: 'Two open palms held side by side, henna patterns filling both.' },
  '0f5a6488': { alt: 'Bride and groom face each other holding hands as spark fountains burn on both sides.', note: 'Cold sparks, and the room goes quiet.' },
  '0f5a6489': { alt: 'The couple hold hands amid falling sparks, guests watching from behind.' },
  '0f5a6491': { alt: 'A wider view of the couple between two banks of spark fountains and low fog.' },
  '0f5a6494': { alt: 'Seen from behind, the couple raise joined hands above their heads through the smoke.' },
  '0f5a6503': { alt: 'The groom greets the room with folded hands, the bride beside him, gold drape behind.' },
  '0f5a6506': { alt: 'Wide view of the stage: the couple stand in fog lit by spark fountains and gold fabric.' },
  '0f5a6528': { alt: 'Two guests stand together for a portrait against a panelled wall.' },
  '0f5a6531': { alt: 'A woman in a teal sari looks over her shoulder at the camera.' },
  '0f5a6536': { alt: 'A woman in a teal sari stands full length, phone in hand, looking into the lens.' },
  '0f5a6545': { alt: 'A woman in a purple sari, bangles stacked to the elbow, smiling at the camera.' },
  '0f5a6604': { alt: 'A couple dance on a lit floor in front of a red graphic backdrop.' },
  '0f5a6631': { alt: 'Full-length portrait of the couple, he in cream, she in deep maroon.' },
  '0f5a6744': { alt: 'A man in a black tuxedo and bow tie, hand raised to his lapel.' },
  '0f5a9678': { alt: 'The groom in cream, ceremonial sword at his side, the bride in red beside him.' },
  '0f5a9697': { alt: 'The couple seated on a gilded settee in front of a wall of peach and orange flowers.' },
  '0f5a9856': { alt: 'Bride and groom sit at a long table of food, garlands still around their necks.', note: 'Nobody photographs this part. They should.' },
  '0f5a9946': { alt: 'An elder in a pink turban sits cross-legged beside the groom at the sacred fire.' },
  '0f5a9959': { alt: 'The bride in red sits at the mandap surrounded by family and ritual trays.' },
  '0f5a9962': { alt: 'The bride in red and gold with her eyes closed, maang tikka against her hair.', note: 'A held breath.' },
  '0f5a9983': { alt: 'Elders\' hands pass an offering to the couple across the ritual fire.' },
  '0f5a9991': { alt: 'Hands joined over the fire as a relative ties the couple together.' },
  '0f5a6305': { alt: 'The bride\'s face fills the frame in deep red light, eyes lowered.' },
  '0f5a6324': { alt: 'The bride in maroon leans back against a wash of pink light, henna on her arms.' },
  '0f5a6329': { alt: 'The bride in maroon and silver against a plain red wall, looking into the lens.', note: 'One wall, one light, no set.' },
  '0f5a6360': { alt: 'The bride in maroon with an emerald necklace, lit low against near-darkness.' },
  '0f5a6366': { alt: 'The bride is helped with her jewellery in warm low light, another face half in shadow.' },
};

// ─── Project categories mapping ───────────────────────────────────────────────
const PHOTO_CATEGORIES = {
  'Wedding': ['0f5a6488', '0f5a6489', '0f5a6491', '0f5a6494', '0f5a6503', '0f5a6506', '0f5a6528', '0f5a6531', '0f5a6536', '0f5a6545', '0f5a6631', '0f5a9678', '0f5a9697', '0f5a9856', '0f5a9946', '0f5a9959', '0f5a9962', '0f5a9983', '0f5a9991', '0f5a6305', '0f5a6324', '0f5a6329', '0f5a6360', '0f5a6366'],
  'Ring Ceremony': ['0f5a4569', '0f5a4579', '0f5a4584', '0f5a4587', '0f5a4594', '0f5a4601', '0f5a4616', '0f5a4684', '0f5a5046', '0f5a5048', '0f5a5061', '0f5a5062', '0f5a5067', '0f5a6604', '0f5a6744'],
  'Pre-Wedding': [],
  'Haldi': [],
  'Mehendi': [],
};

const VIDEOS = [
  { id: 'teaser-1', slug: 'cinematic-wedding-teaser', title: 'Teaser 1', category: 'Teaser', description: 'A cinematic glimpse into the celebration, weaving together key moments and emotional highlights.', videoUrl: 'https://www.youtube.com/embed/1etOrEXAWkA?rel=0', duration: '6:38', thumbnail: '/photos/0f5a9991-800.jpg' },
  { id: 'trailer-1', slug: 'cinematic-wedding-trailer', title: 'Trailer 1', category: 'Trailer', description: 'An emotional wedding film trailer capturing the joy, rituals, and unforgettable celebrations.', videoUrl: 'https://www.youtube.com/embed/U0I1RKO-6Ho?rel=0', duration: '7:03', thumbnail: '/photos/0f5a9678-800.jpg' },
  { id: 'highlight-1', slug: 'cinematic-wedding-highlights', title: 'Highlights 1', category: 'Highlights', description: 'A curated highlight reel capturing the emotion, grandeur, and unforgettable celebrations.', videoUrl: 'https://www.youtube.com/embed/Cb2fObhWWyQ?rel=0', duration: '3:45', thumbnail: '/photos/0f5a9959-800.jpg' },
  { id: 'highlight-2', slug: 'cinematic-wedding-highlights-2', title: 'Highlights 2', category: 'Highlights', description: 'A vivid wedding highlights film weaving together sacred ceremonies, celebration, and heartfelt memories.', videoUrl: 'https://www.youtube.com/embed/XCMc5XBaqFA?rel=0', duration: '4:12', thumbnail: '/photos/0f5a9962-800.jpg' },
];

// ─── App State ────────────────────────────────────────────────────────────────
const state = {
  activeGroup: 'photography', // 'photography' | 'video'
  activeCategory: 'all',
  lightboxIndex: null,
  lightboxIds: [],
  videoModal: null,
  mobileMenuOpen: false,
};

// ─── Utilities ────────────────────────────────────────────────────────────────
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const describe = (id) => CAPTIONS[id]?.alt ?? 'A photograph by Chawla Studio.';
const noteFor = (id) => CAPTIONS[id]?.note ?? null;

const pad2 = (n) => String(n + 1).padStart(2, '0');

function makePhotoEl(id, sizes, slot, index) {
  const photo = PHOTOS[id];
  if (!photo) return null;
  const note = noteFor(id);
  const alt = describe(id);

  const li = document.createElement('li');
  li.className = `gallery-item ${slot}`;
  li.dataset.id = id;
  li.dataset.index = index;

  li.innerHTML = `
    <button type="button" class="gallery-image-btn" aria-label="Open frame ${pad2(index)} full screen: ${alt}">
      <span class="frame-label">
        <span class="frame-number">${pad2(index)}</span>
        <span class="view-text">View Frame &rarr;</span>
      </span>
      <div class="image-wrap" style="background-color: var(--color-ink-deep, #141414);">
        <picture>
          <source type="image/webp" srcset="${photo.srcSet}" sizes="${sizes}">
          <img src="${photo.src}" alt="${alt}" loading="lazy" class="gallery-photo" width="${photo.width}" height="${photo.height}">
        </picture>
      </div>
    </button>
    ${note ? `<p class="photo-note">${note}</p>` : ''}
  `;

  li.querySelector('.gallery-image-btn').addEventListener('click', () => {
    openLightbox(state.lightboxIds, index);
  });

  return li;
}

// ─── Cinematic Loader ─────────────────────────────────────────────────────────
function initLoader() {
  const loader = $('#loader');
  const app = $('#app');
  const progressFill = loader?.querySelector('.progress-fill');
  const progressText = loader?.querySelector('.progress-text');

  if (!loader || !app) return;

  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15 + 2;
    if (progress > 100) progress = 100;

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `Loading Beautiful Moments... ${Math.floor(progress)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(finishLoading, 600);
    }
  }, 80);

  // Safety: always release after maxVisible ms
  setTimeout(finishLoading, 6400);

  function finishLoading() {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.8s ease';

    setTimeout(() => {
      loader.classList.add('hidden');
      app.classList.remove('hidden');

      // Fade in app
      app.style.opacity = '0';
      requestAnimationFrame(() => {
        app.style.transition = 'opacity 0.5s ease';
        app.style.opacity = '1';
      });

      // Trigger hero animations
      setTimeout(() => {
        document.querySelectorAll('.reveal-target').forEach((el, i) => {
          setTimeout(() => el.classList.add('revealed'), i * 80);
        });
      }, 100);
    }, 800);
  }
}

// ─── Header Scroll Behaviour ──────────────────────────────────────────────────
function initHeader() {
  const header = $('#header');
  const progressBar = $('#progress-bar');
  if (!header) return;

  let lastScroll = 0;

  const tick = () => {
    const y = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;

    // Settled state
    if (y > 64) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Reading progress
    if (progressBar) {
      const pct = total > 0 ? (y / total) : 0;
      progressBar.style.width = `${pct * 100}%`;
    }

    lastScroll = y;
  };

  window.addEventListener('scroll', tick, { passive: true });
  tick();
}

// ─── Active Section Tracking ──────────────────────────────────────────────────
function initActiveSection() {
  const sections = $$('section[data-section]');
  const navLinks = $$('[data-section]');

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      let active = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          active = entry.target.dataset.section;
        }
      });
      if (!active) return;

      navLinks.forEach((link) => {
        const isActive = link.dataset.section === active;
        link.setAttribute('data-active', isActive ? 'true' : 'false');
      });
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = $('.mobile-menu-toggle');
  const menu = $('#mobile-menu');
  const close = $('.mobile-menu-close');
  const backdrop = menu?.querySelector('.mobile-menu-backdrop');

  if (!toggle || !menu) return;

  const open = () => {
    menu.removeAttribute('hidden');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => menu.setAttribute('hidden', ''), 300);
  };

  toggle.addEventListener('click', open);
  close?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  // Close on nav click
  $$('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) closeMenu();
  });
}

// ─── Gallery Filter System ────────────────────────────────────────────────────
function initGallery() {
  const galleryGrid = $('#photography-gallery');
  const videoGrid = $('#video-gallery');
  const filterTabs = $$('.filter-tab');
  const categoryTabs = $$('.category-tab');
  const countEl = $('#gallery-count');

  if (!galleryGrid) return;

  // Photo rhythm for editorial grid
  const RHYTHM = [
    { className: 'gc-8', sizes: '(min-width: 768px) 62vw, 92vw' },
    { className: 'gc-4 gt-28', sizes: '(min-width: 768px) 31vw, 92vw' },
    { className: 'gc-6', sizes: '(min-width: 768px) 46vw, 92vw' },
    { className: 'gc-5 gc-start-8 gt-20', sizes: '(min-width: 768px) 39vw, 92vw' },
    { className: 'gc-12', sizes: '(min-width: 768px) 92vw, 92vw' },
    { className: 'gc-5 gc-start-2', sizes: '(min-width: 768px) 39vw, 92vw' },
    { className: 'gc-6 gc-start-7 gt-16', sizes: '(min-width: 768px) 46vw, 92vw' },
  ];

  // Category tabs: show only the relevant set
  function updateCategoryTabs() {
    const isPhoto = state.activeGroup === 'photography';
    const photoCategories = ['Wedding', 'Pre-Wedding', 'Haldi', 'Mehendi', 'Ring Ceremony'];
    const videoCategories = ['Teaser', 'Trailer', 'Highlights', 'Reels'];

    categoryTabs.forEach((tab) => {
      const cat = tab.dataset.category;
      if (cat === 'all') {
        tab.style.display = '';
        return;
      }
      const show = isPhoto ? photoCategories.includes(cat) : videoCategories.includes(cat);
      tab.style.display = show ? '' : 'none';
    });
  }

  function getPhotoIds() {
    const cat = state.activeCategory;
    if (cat === 'all') {
      // All photography ids
      return Object.keys(PHOTOS);
    }
    return PHOTO_CATEGORIES[cat] ?? [];
  }

  function getVideos() {
    const cat = state.activeCategory;
    if (cat === 'all') return VIDEOS;
    return VIDEOS.filter((v) => v.category === cat);
  }

  function renderPhotoGrid(ids) {
    galleryGrid.innerHTML = '';
    state.lightboxIds = ids;

    ids.forEach((id, index) => {
      const slot = RHYTHM[index % RHYTHM.length];
      const el = makePhotoEl(id, slot.sizes, slot.className, index);
      if (el) galleryGrid.appendChild(el);
    });

    if (countEl) countEl.textContent = `${ids.length} ${ids.length === 1 ? 'frame' : 'frames'}`;

    // Lazy observe new items
    observeReveal(galleryGrid.querySelectorAll('.gallery-item'));
  }

  function renderVideoGrid(videos) {
    videoGrid.innerHTML = '';

    videos.forEach((vid, index) => {
      const li = document.createElement('li');
      li.className = 'video-item';
      li.innerHTML = `
        <div class="video-card">
          <div class="video-thumb">
            <img src="${vid.thumbnail}" alt="${vid.title} thumbnail" loading="lazy">
            <div class="play-overlay">
              <button class="play-btn" aria-label="Play ${vid.title}">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <span class="duration-badge">${vid.duration}</span>
          </div>
          <div class="video-info">
            <p class="video-category-tag">${vid.category}</p>
            <h3 class="video-title">${vid.title}</h3>
            <p class="video-desc">${vid.description}</p>
          </div>
        </div>
      `;

      li.querySelector('.play-btn').addEventListener('click', () => {
        openVideoModal(videos, index);
      });

      videoGrid.appendChild(li);
    });

    if (countEl) countEl.textContent = `${videos.length} ${videos.length === 1 ? 'film' : 'films'}`;

    observeReveal(videoGrid.querySelectorAll('.video-item'));
  }

  function render() {
    const isPhoto = state.activeGroup === 'photography';
    galleryGrid.style.display = isPhoto ? '' : 'none';
    videoGrid.style.display = isPhoto ? 'none' : '';

    if (isPhoto) {
      renderPhotoGrid(getPhotoIds());
    } else {
      renderVideoGrid(getVideos());
    }
  }

  // Group tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.activeGroup = tab.dataset.group;
      state.activeCategory = 'all';

      filterTabs.forEach((t) => t.classList.toggle('active', t === tab));
      categoryTabs.forEach((t) => t.classList.toggle('active', t.dataset.category === 'all'));

      updateCategoryTabs();
      render();
    });
  });

  // Category tabs
  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.activeCategory = tab.dataset.category;
      categoryTabs.forEach((t) => t.classList.toggle('active', t === tab));
      render();
    });
  });

  updateCategoryTabs();
  render();
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
let lightboxEl = null;

function openLightbox(ids, startIndex) {
  state.lightboxIndex = startIndex;
  state.lightboxIds = ids;

  if (!lightboxEl) buildLightbox();
  updateLightbox();
  lightboxEl.removeAttribute('hidden');
  lightboxEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const focusable = lightboxEl.querySelector('button');
  focusable?.focus();
}

function buildLightbox() {
  lightboxEl = document.createElement('div');
  lightboxEl.setAttribute('role', 'dialog');
  lightboxEl.setAttribute('aria-modal', 'true');
  lightboxEl.setAttribute('hidden', '');
  lightboxEl.className = 'lightbox';
  lightboxEl.innerHTML = `
    <div class="lb-header">
      <p class="lb-title" id="lb-title"></p>
      <p class="lb-counter" aria-live="polite"></p>
      <button type="button" class="lb-close" aria-label="Close lightbox">Close</button>
    </div>
    <div class="lb-body">
      <div class="lb-frame-wrap">
        <picture class="lb-picture">
          <source type="image/webp" class="lb-src-webp">
          <img class="lb-img" alt="">
        </picture>
      </div>
    </div>
    <div class="lb-footer">
      <div class="lb-exif"></div>
      <div class="lb-nav">
        <button type="button" class="lb-prev" aria-label="Previous frame">&#8592; Prev</button>
        <button type="button" class="lb-next" aria-label="Next frame">Next &#8594;</button>
      </div>
    </div>
  `;

  lightboxEl.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lightboxEl.querySelector('.lb-prev').addEventListener('click', () => moveLightbox(-1));
  lightboxEl.querySelector('.lb-next').addEventListener('click', () => moveLightbox(1));

  document.addEventListener('keydown', onLightboxKey);
  document.body.appendChild(lightboxEl);
}

function updateLightbox() {
  if (!lightboxEl) return;
  const id = state.lightboxIds[state.lightboxIndex];
  if (!id) return;
  const photo = PHOTOS[id];
  const count = state.lightboxIds.length;

  lightboxEl.setAttribute('aria-label', `Frame ${state.lightboxIndex + 1} of ${count}`);
  lightboxEl.querySelector('.lb-title').textContent = 'Chawla Studio';
  lightboxEl.querySelector('.lb-counter').textContent = `${pad2(state.lightboxIndex)} / ${String(count).padStart(2, '0')}`;

  const wrap = lightboxEl.querySelector('.lb-frame-wrap');
  const webpSrc = lightboxEl.querySelector('.lb-src-webp');
  const img = lightboxEl.querySelector('.lb-img');

  if (photo) {
    wrap.style.maxWidth = `min(92vw, calc(66svh * ${photo.aspectRatio}))`;
    webpSrc.srcset = photo.srcSet;
    webpSrc.sizes = '92vw';
    img.src = photo.src;
    img.alt = describe(id);
    img.width = photo.width;
    img.height = photo.height;
    img.style.backgroundColor = 'var(--color-ink-deep, #141414)';

    // EXIF
    const { capture } = photo;
    const rows = [
      ['Camera', capture.camera],
      ['Lens', capture.lens],
      ['Focal', capture.focal],
      ['Aperture', capture.aperture],
      ['Shutter', capture.shutter],
      ['ISO', capture.iso !== null ? String(capture.iso) : null],
      ['Date', capture.date],
    ].filter(([, v]) => v);

    const exif = lightboxEl.querySelector('.lb-exif');
    exif.innerHTML = rows.length > 0
      ? `<dl>${rows.map(([k, v]) => `<div><dt class="sr-only">${k}</dt><dd class="lb-exif-val">${v}</dd></div>`).join('')}</dl>`
      : '<p>No capture data recorded</p>';
  }

  const note = noteFor(id);
  let noteEl = lightboxEl.querySelector('.lb-note');
  if (note) {
    if (!noteEl) {
      noteEl = document.createElement('p');
      noteEl.className = 'lb-note';
      lightboxEl.querySelector('.lb-footer').prepend(noteEl);
    }
    noteEl.textContent = note;
  } else if (noteEl) {
    noteEl.remove();
  }
}

function moveLightbox(delta) {
  const count = state.lightboxIds.length;
  state.lightboxIndex = (state.lightboxIndex + delta + count) % count;
  updateLightbox();
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.setAttribute('hidden', '');
  lightboxEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function onLightboxKey(e) {
  if (!lightboxEl || lightboxEl.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') moveLightbox(1);
  if (e.key === 'ArrowLeft') moveLightbox(-1);
}

// ─── Video Modal ──────────────────────────────────────────────────────────────
let videoModalEl = null;
let currentVideoQueue = [];
let currentVideoIndex = 0;

function openVideoModal(queue, startIndex) {
  currentVideoQueue = queue;
  currentVideoIndex = startIndex;

  if (!videoModalEl) buildVideoModal();
  updateVideoModal();
  videoModalEl.removeAttribute('hidden');
  videoModalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function buildVideoModal() {
  videoModalEl = document.createElement('div');
  videoModalEl.className = 'vm';
  videoModalEl.setAttribute('role', 'dialog');
  videoModalEl.setAttribute('aria-modal', 'true');
  videoModalEl.setAttribute('hidden', '');
  videoModalEl.innerHTML = `
    <div class="vm-backdrop"></div>
    <div class="vm-container">
      <div class="vm-header">
        <div>
          <p class="vm-category"></p>
          <h3 class="vm-title"></h3>
          <p class="vm-desc"></p>
        </div>
        <button type="button" class="vm-close" aria-label="Close video modal">
          <span></span><span></span>
        </button>
      </div>
      <div class="vm-body">
        <div class="vm-ratio">
          <iframe class="vm-iframe" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="vm-footer">
        <button type="button" class="vm-prev">&#8592; Prev</button>
        <div class="vm-dots"></div>
        <button type="button" class="vm-next">Next &#8594;</button>
      </div>
    </div>
  `;

  videoModalEl.querySelector('.vm-close').addEventListener('click', closeVideoModal);
  videoModalEl.querySelector('.vm-backdrop').addEventListener('click', closeVideoModal);
  videoModalEl.querySelector('.vm-prev').addEventListener('click', () => moveVideo(-1));
  videoModalEl.querySelector('.vm-next').addEventListener('click', () => moveVideo(1));
  document.addEventListener('keydown', onVideoModalKey);
  document.body.appendChild(videoModalEl);
}

function updateVideoModal() {
  if (!videoModalEl) return;
  const vid = currentVideoQueue[currentVideoIndex];
  if (!vid) return;

  videoModalEl.querySelector('.vm-category').textContent = vid.category;
  videoModalEl.querySelector('.vm-title').textContent = vid.title;
  videoModalEl.querySelector('.vm-desc').textContent = vid.description;

  const iframe = videoModalEl.querySelector('.vm-iframe');
  iframe.src = `${vid.videoUrl}&autoplay=1`;

  const dots = videoModalEl.querySelector('.vm-dots');
  dots.innerHTML = currentVideoQueue.map((_, i) =>
    `<button class="vm-dot ${i === currentVideoIndex ? 'active' : ''}" data-index="${i}" aria-label="Go to video ${i + 1}"></button>`
  ).join('');
  dots.querySelectorAll('.vm-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      currentVideoIndex = parseInt(dot.dataset.index);
      updateVideoModal();
    });
  });

  videoModalEl.querySelector('.vm-prev').style.visibility =
    currentVideoIndex > 0 ? 'visible' : 'hidden';
  videoModalEl.querySelector('.vm-next').style.visibility =
    currentVideoIndex < currentVideoQueue.length - 1 ? 'visible' : 'hidden';
}

function moveVideo(delta) {
  const next = currentVideoIndex + delta;
  if (next >= 0 && next < currentVideoQueue.length) {
    currentVideoIndex = next;
    updateVideoModal();
  }
}

function closeVideoModal() {
  if (!videoModalEl) return;
  const iframe = videoModalEl.querySelector('.vm-iframe');
  iframe.src = '';
  videoModalEl.setAttribute('hidden', '');
  videoModalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function onVideoModalKey(e) {
  if (!videoModalEl || videoModalEl.hidden) return;
  if (e.key === 'Escape') closeVideoModal();
  if (e.key === 'ArrowRight') moveVideo(1);
  if (e.key === 'ArrowLeft') moveVideo(-1);
}

// ─── Showreel Modal (hero) ────────────────────────────────────────────────────
function initShowreelModal() {
  const btn = $('#showreel-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    openVideoModal(
      [VIDEOS[0]],
      0
    );
  });
}

// ─── IntersectionObserver for reveal animations ───────────────────────────────
let revealObserver = null;

function observeReveal(elements) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
  }
  elements.forEach((el) => revealObserver.observe(el));
}

// ─── Enquiry Form ─────────────────────────────────────────────────────────────
function initForm() {
  const form = $('#enquiry-form');
  const statusEl = $('#form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data);

    // Simple validation
    const requiredFields = ['name', 'email', 'message'];
    let valid = true;
    requiredFields.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input?.value?.trim()) {
        valid = false;
        input?.classList.add('error');
      } else {
        input?.classList.remove('error');
      }
    });

    if (!valid) {
      if (statusEl) statusEl.textContent = 'Please fill in all required fields.';
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    if (statusEl) statusEl.textContent = 'Sending your enquiry…';

    // Try to POST; fall back to mailto
    try {
      const endpoint = form.dataset.endpoint;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`${res.status}`);
        form.reset();
        if (statusEl) statusEl.textContent = 'Sent. Your enquiry has reached the studio.';
      } else {
        // Mailto fallback
        const lines = [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          values.phone ? `Phone: ${values.phone}` : null,
          values.eventType ? `Event type: ${values.eventType}` : null,
          values.eventDate ? `Date: ${values.eventDate}` : null,
          values.location ? `Location: ${values.location}` : null,
          `\n${values.message}`,
        ].filter(Boolean).join('\n');

        window.location.href = `mailto:info@chawlastudio.com?subject=${encodeURIComponent('Enquiry from Chawla Studio website')}&body=${encodeURIComponent(lines)}`;
        if (statusEl) statusEl.textContent = 'Your email app should now be open; press Send there and it\'s on its way.';
      }
    } catch {
      if (statusEl) statusEl.textContent = 'That did not go through. Please write to info@chawlastudio.com instead.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send enquiry';
    }
  });
}

// ─── Smooth scroll for anchor links ───────────────────────────────────────────
function initSmoothScroll() {
  const headerHeight = 72;

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;

    const href = a.getAttribute('href');
    if (!href?.startsWith('/#') && !href?.startsWith('#')) return;

    const id = href.split('#')[1];
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });

    // Close mobile menu if open
    const mobileMenu = $('#mobile-menu');
    if (!mobileMenu?.hidden) {
      mobileMenu.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });
}

// ─── Pointer parallax ─────────────────────────────────────────────────────────
function initParallax() {
  const heroBackdrop = $('#hero-backdrop');
  if (!heroBackdrop) return;

  // Media query: skip on touch/mobile/reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let frame = 0;
  let px = 0, py = 0;
  let tx = 0, ty = 0;

  const lerp = (a, b, t) => a + (b - a) * t;

  document.addEventListener('pointermove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    px = (e.clientX - cx) / cx;
    py = (e.clientY - cy) / cy;
  });

  const tick = () => {
    tx = lerp(tx, px, 0.05);
    ty = lerp(ty, py, 0.05);
    heroBackdrop.style.transform = `translate3d(${tx * 12}px, ${ty * 8}px, 0) scale(1.02)`;
    frame = requestAnimationFrame(tick);
  };

  // Only while hero is visible
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        frame = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    },
    { threshold: 0 }
  );

  const heroSection = $('#hero');
  if (heroSection) obs.observe(heroSection);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeader();
  initActiveSection();
  initMobileMenu();
  initGallery();
  initShowreelModal();
  initForm();
  initSmoothScroll();
  initParallax();

  // Observe static reveal elements
  observeReveal($$('.reveal'));
});
