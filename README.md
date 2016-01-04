# template-generator
Generates code templates for technical interview questions from json file

## Usage
```
node dist/template-generator.js < aplusb.json
```

```
{
  "cpp": {
    "solution": "class Solution {\n    public:\n    /*\n     * param a: The first integer\n     * param b: The second integer\n     * return: The sum of a and b\n     */\n    int ( a,  b) {\n        // write your code here, try to do it without arithmetic operators.\n    }\n};\n",
    "main": "int main() {\n    string data;\n    std::getline(std::cin, data);\n     a = (data);\n    string data;\n    std::getline(std::cin, data);\n     b = (data);\n    Solution solution;\n    std::cout << (solution.(a, b)) << std::endl;\n    return 0;\n}\n"
  },
  "python": {
    "solution": "class Solution:\n    \"\"\"\n    @param a: The first integer\n    @param b: The second integer\n    @return: The sum of a and b\n    \"\"\"\n    def (self, a, b):\n    # \n",
    "main": "import sys\n\na = (sys.stdin.readline())\nb = (sys.stdin.readline())\nsolution = Solution()\nprint defaultEncoder(solution.(a, b))\n"
  },
  "java": {
    "solution": "class Solution {\n    /*\n     * param a: The first integer\n     * param b: The second integer\n     * return: The sum of a and b\n     */\n    public  ( a,  b) {\n        // write your code here, try to do it without arithmetic operators.\n    }\n};\n",
    "main": "import org.json.*;\nclass Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n         a = (scanner.nextLine());\n         b = (scanner.nextLine());\n        Solution solution = new Solution();\n        String result = (solution.(a, b));\n        System.out.println(result);\n    }\n}\n"
  }
}
```
