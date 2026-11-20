# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.js >> Login Tests >> login to application
- Location: tests\smoke\login.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - button "Cart" [ref=e10] [cursor=pointer]
        - generic [ref=e11]: Manage
        - img "menu" [ref=e12] [cursor=pointer]
        - generic [ref=e13]:
          - generic [ref=e14]:
            - text: Learn Automation Courses
            - img "delete" [ref=e15] [cursor=pointer]
          - generic [ref=e16]:
            - link "Home" [ref=e17] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=e19] [cursor=pointer]:
              - /url: /practise
            - button "Sign out" [ref=e21] [cursor=pointer]
  - generic [ref=e28]:
    - generic [ref=e29]:
      - heading "Selenium For Web Automation" [level=2] [ref=e30]
      - paragraph [ref=e31]: Selenium For Web Automation...
    - generic [ref=e32]:
      - img "instructor" [ref=e33]
      - text: Mukesh Otwani
    - generic [ref=e34]:
      - img "clock" [ref=e35]
      - generic [ref=e36]: "Start:"
      - text: Mon Feb 17 2025
    - generic [ref=e37]:
      - img "clock" [ref=e38]
      - generic [ref=e39]: "Finish:"
      - text: Mon Mar 17 2025
    - generic [ref=e40]:
      - text: "Price:"
      - generic [ref=e41]: ₹1500
    - button [ref=e42] [cursor=pointer]:
      - text: Add to Cart
      - img "right arrow" [ref=e43]
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e47]
      - heading "©2023 All rights reserved" [level=2] [ref=e48]
    - generic [ref=e49] [cursor=pointer]:
      - link [ref=e50]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=e54]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=e57]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=e60]:
        - /url: https://www.facebook.com/groups/256655817858291
```