**Google Project Zero** - a project to discovery vulnerabilities before they can be exploited

- Google Project Zero discovered a vulnerability in **speculative execution**
- vulnerability affected nearly all processors (AMD, Intel, and ARM)

**speculative execution** - when a processor precomputes code. if the code's result is not needed, it is thrown away.

- it was shown that the pre computed code in speculative execution was not scanned for vulnerabilities

  **kernel space** - where trusted code is ran with hardly any permission restrictions. code that crashes here has potentially catastrophic impacts

**user space** - code here is ran with user permissions in mind and crashes are isolated to the user

- since hardware cannot not easily be patched, it was up to the OS developers to patch the vulnerabilities. this was done by making it take longer to swap from user space to kernel space, effectively slowing processing by up to 30%
